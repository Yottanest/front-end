# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- YottaNest logo SVG added to public directory
- Brand color integration (Cream #FCF7EE and Charcoal #3F3F3F)
- Logo displayed in navigation bar (desktop and mobile)

### Changed
- Updated color scheme throughout the application to match brand colors
- Modified gradients in Hero section to use cream/charcoal tones
- Updated floating orbs and visual elements to complement new color palette
- All original colors preserved as comments in globals.css for easy reversal

### Technical Details
- Colors are defined as CSS variables in `src/app/globals.css`
- To revert to original blue theme: uncomment original color values in globals.css
- Logo file location: `public/yottanest-logo.svg`

## [0.1.0] - 2025-12-30

### Added
- Initial Next.js project setup with create-next-app
- TypeScript configuration
- Tailwind CSS v4 integration
- ESLint configuration
- Next.js 15.1.6 with React 19.2.3
- Geist font family optimization
- Basic development, build, and lint scripts

### Fixed
- Fixed typo in README.md deployment section

[Unreleased]: https://github.com/yourusername/yottanest-web/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/yourusername/yottanest-web/releases/tag/v0.1.0
