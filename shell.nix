{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = [
    pkgs.nodejs
    pkgs.pnpm
    pkgs.biome
    pkgs.oxipng
    pkgs.jpegoptim
    pkgs.croc
  ];
}
