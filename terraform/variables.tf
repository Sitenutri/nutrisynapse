variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "S3 bucket name (must be globally unique)"
  type        = string
  default     = "nutrisynapse-media"
}

variable "allowed_origins" {
  description = "Allowed origins for CORS (add your Vercel domain here)"
  type        = list(string)
  default     = ["http://localhost:3000", "https://DOMINIO-DA-MAE.com.br", "https://SEU-PROJETO.vercel.app"]
}
