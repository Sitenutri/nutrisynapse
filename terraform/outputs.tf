output "bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.media.bucket
}

output "bucket_region" {
  description = "S3 bucket region"
  value       = var.aws_region
}

output "iam_access_key_id" {
  description = "IAM access key ID for the app user"
  value       = aws_iam_access_key.app.id
}

output "iam_secret_access_key" {
  description = "IAM secret access key for the app user"
  value       = aws_iam_access_key.app.secret
  sensitive   = true
}

output "public_base_url" {
  description = "Base URL for uploaded files"
  value       = "https://${aws_s3_bucket.media.bucket}.s3.${var.aws_region}.amazonaws.com"
}
