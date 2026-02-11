find ./dist \( -iname "*.jpg" -o -iname "*.jpeg" \) | jpegoptim -p -P --files-stdin -w $(nproc --all)
oxipng -o max -a -r ./dist

