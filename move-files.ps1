# Create necessary directories if they don't exist
New-Item -ItemType Directory -Force -Path "src/assets/scss"
New-Item -ItemType Directory -Force -Path "src/assets/js"
New-Item -ItemType Directory -Force -Path "src/assets/imgs"
New-Item -ItemType Directory -Force -Path "src/assets/cv"
New-Item -ItemType Directory -Force -Path "src/assets/vendors"
New-Item -ItemType Directory -Force -Path "public/css"
New-Item -ItemType Directory -Force -Path "public/js"
New-Item -ItemType Directory -Force -Path "public/imgs"
New-Item -ItemType Directory -Force -Path "public/vendors"

# Move files from old structure to new
Copy-Item "public_html/assets/scss/*" -Destination "src/assets/scss/" -Recurse
Copy-Item "public_html/assets/js/*" -Destination "src/assets/js/" -Recurse
Copy-Item "public_html/assets/imgs/*" -Destination "src/assets/imgs/" -Recurse
Copy-Item "public_html/assets/cv/*" -Destination "src/assets/cv/" -Recurse
Copy-Item "public_html/assets/vendors/*" -Destination "src/assets/vendors/" -Recurse
Copy-Item "public_html/*.html" -Destination "src/"

Write-Host "Files have been moved to the new structure successfully!" 