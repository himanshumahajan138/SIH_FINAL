# Use a specific Python version (3.10.11) as the base image
FROM python:3.10.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install system dependencies (if needed)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install -r requirements.txt

# Expose the port for the Rasa server
EXPOSE 5005

# Run the Rasa server with the specified model
CMD ["rasa", "run", "-m", "models/himanshu-chatbot-final.tar.gz", "--cors", "*"]
