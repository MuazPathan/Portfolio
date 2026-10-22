export interface TechStackItem {
  name: string;
  file: string;
  category: "Cloud & Infrastructure" | "DevOps & CI/CD" | "Databases & Storage" | "Languages & Runtimes" | "Frameworks & Web" | "AI & Data Science" | "Tools & Systems";
  base: string;
}

export const TECH_STACK_CATEGORIES = [
  "All",
  "Cloud & Infrastructure",
  "DevOps & CI/CD",
  "Databases & Storage",
  "Languages & Runtimes",
  "Frameworks & Web",
  "AI & Data Science",
  "Tools & Systems",
] as const;

export type TechCategory = typeof TECH_STACK_CATEGORIES[number];

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    "name": "AWS",
    "file": "AWS-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "AWS"
  },
  {
    "name": "Ableton",
    "file": "Ableton-Dark.svg",
    "category": "Tools & Systems",
    "base": "Ableton"
  },
  {
    "name": "ActivityPub",
    "file": "ActivityPub-Dark.svg",
    "category": "Tools & Systems",
    "base": "ActivityPub"
  },
  {
    "name": "Actix",
    "file": "Actix-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Actix"
  },
  {
    "name": "Adonis",
    "file": "Adonis.svg",
    "category": "Frameworks & Web",
    "base": "Adonis"
  },
  {
    "name": "AfterEffects",
    "file": "AfterEffects.svg",
    "category": "Tools & Systems",
    "base": "AfterEffects"
  },
  {
    "name": "AiScript",
    "file": "AiScript-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "AiScript"
  },
  {
    "name": "Alpine.js",
    "file": "AlpineJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "AlpineJS"
  },
  {
    "name": "Anaconda",
    "file": "Anaconda-Dark.svg",
    "category": "AI & Data Science",
    "base": "Anaconda"
  },
  {
    "name": "Android Studio",
    "file": "AndroidStudio-Dark.svg",
    "category": "Tools & Systems",
    "base": "AndroidStudio"
  },
  {
    "name": "Angular",
    "file": "Angular-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Angular"
  },
  {
    "name": "Ansible",
    "file": "Ansible.svg",
    "category": "Cloud & Infrastructure",
    "base": "Ansible"
  },
  {
    "name": "Apollo",
    "file": "Apollo.svg",
    "category": "Tools & Systems",
    "base": "Apollo"
  },
  {
    "name": "Apple",
    "file": "Apple-Dark.svg",
    "category": "Tools & Systems",
    "base": "Apple"
  },
  {
    "name": "Appwrite",
    "file": "Appwrite.svg",
    "category": "Cloud & Infrastructure",
    "base": "Appwrite"
  },
  {
    "name": "Arch",
    "file": "Arch-Dark.svg",
    "category": "Tools & Systems",
    "base": "Arch"
  },
  {
    "name": "Arduino",
    "file": "Arduino.svg",
    "category": "Tools & Systems",
    "base": "Arduino"
  },
  {
    "name": "Astro",
    "file": "Astro.svg",
    "category": "Frameworks & Web",
    "base": "Astro"
  },
  {
    "name": "Atom",
    "file": "Atom.svg",
    "category": "Tools & Systems",
    "base": "Atom"
  },
  {
    "name": "Audition",
    "file": "Audition.svg",
    "category": "Tools & Systems",
    "base": "Audition"
  },
  {
    "name": "AutoCAD",
    "file": "AutoCAD-Dark.svg",
    "category": "Tools & Systems",
    "base": "AutoCAD"
  },
  {
    "name": "Azul",
    "file": "Azul.svg",
    "category": "Tools & Systems",
    "base": "Azul"
  },
  {
    "name": "Microsoft Azure",
    "file": "Azure-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Azure"
  },
  {
    "name": "BSD",
    "file": "BSD-Dark.svg",
    "category": "Tools & Systems",
    "base": "BSD"
  },
  {
    "name": "Babel",
    "file": "Babel.svg",
    "category": "Tools & Systems",
    "base": "Babel"
  },
  {
    "name": "Bash",
    "file": "Bash-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Bash"
  },
  {
    "name": "Bevy",
    "file": "Bevy-Dark.svg",
    "category": "Tools & Systems",
    "base": "Bevy"
  },
  {
    "name": "BitBucket",
    "file": "BitBucket-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "BitBucket"
  },
  {
    "name": "Blender",
    "file": "Blender-Dark.svg",
    "category": "Tools & Systems",
    "base": "Blender"
  },
  {
    "name": "Bootstrap",
    "file": "Bootstrap.svg",
    "category": "Frameworks & Web",
    "base": "Bootstrap"
  },
  {
    "name": "Bun",
    "file": "Bun-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Bun"
  },
  {
    "name": "C",
    "file": "C.svg",
    "category": "Languages & Runtimes",
    "base": "C"
  },
  {
    "name": "CLion",
    "file": "CLion-Dark.svg",
    "category": "Tools & Systems",
    "base": "CLion"
  },
  {
    "name": "CMake",
    "file": "CMake-Dark.svg",
    "category": "Tools & Systems",
    "base": "CMake"
  },
  {
    "name": "C++",
    "file": "CPP.svg",
    "category": "Languages & Runtimes",
    "base": "CPP"
  },
  {
    "name": "C#",
    "file": "CS.svg",
    "category": "Languages & Runtimes",
    "base": "CS"
  },
  {
    "name": "CSS3",
    "file": "CSS.svg",
    "category": "Languages & Runtimes",
    "base": "CSS"
  },
  {
    "name": "Cassandra",
    "file": "Cassandra-Dark.svg",
    "category": "Databases & Storage",
    "base": "Cassandra"
  },
  {
    "name": "Clojure",
    "file": "Clojure-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Clojure"
  },
  {
    "name": "Cloudflare",
    "file": "Cloudflare-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Cloudflare"
  },
  {
    "name": "CodePen",
    "file": "CodePen-Dark.svg",
    "category": "Tools & Systems",
    "base": "CodePen"
  },
  {
    "name": "CoffeeScript",
    "file": "CoffeeScript-Dark.svg",
    "category": "Tools & Systems",
    "base": "CoffeeScript"
  },
  {
    "name": "Crystal",
    "file": "Crystal-Dark.svg",
    "category": "Tools & Systems",
    "base": "Crystal"
  },
  {
    "name": "Cypress",
    "file": "Cypress-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "Cypress"
  },
  {
    "name": "D3",
    "file": "D3-Dark.svg",
    "category": "Frameworks & Web",
    "base": "D3"
  },
  {
    "name": "Deno",
    "file": "DENO-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "DENO"
  },
  {
    "name": "Dart",
    "file": "Dart-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Dart"
  },
  {
    "name": "Debian",
    "file": "Debian-Dark.svg",
    "category": "Tools & Systems",
    "base": "Debian"
  },
  {
    "name": "DevTo",
    "file": "DevTo-Dark.svg",
    "category": "Tools & Systems",
    "base": "DevTo"
  },
  {
    "name": "Discord",
    "file": "Discord.svg",
    "category": "Tools & Systems",
    "base": "Discord"
  },
  {
    "name": "DiscordBots",
    "file": "DiscordBots.svg",
    "category": "Tools & Systems",
    "base": "DiscordBots"
  },
  {
    "name": "Discord.js",
    "file": "DiscordJS-Dark.svg",
    "category": "Tools & Systems",
    "base": "DiscordJS"
  },
  {
    "name": "Django",
    "file": "Django.svg",
    "category": "Frameworks & Web",
    "base": "Django"
  },
  {
    "name": "Docker",
    "file": "Docker.svg",
    "category": "Cloud & Infrastructure",
    "base": "Docker"
  },
  {
    "name": ".NET",
    "file": "DotNet.svg",
    "category": "Languages & Runtimes",
    "base": "DotNet"
  },
  {
    "name": "DynamoDB",
    "file": "DynamoDB-Dark.svg",
    "category": "Databases & Storage",
    "base": "DynamoDB"
  },
  {
    "name": "Eclipse",
    "file": "Eclipse-Dark.svg",
    "category": "Tools & Systems",
    "base": "Eclipse"
  },
  {
    "name": "Elasticsearch",
    "file": "Elasticsearch-Dark.svg",
    "category": "Databases & Storage",
    "base": "Elasticsearch"
  },
  {
    "name": "Electron",
    "file": "Electron.svg",
    "category": "Frameworks & Web",
    "base": "Electron"
  },
  {
    "name": "Elixir",
    "file": "Elixir-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Elixir"
  },
  {
    "name": "Elysia",
    "file": "Elysia-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Elysia"
  },
  {
    "name": "Emacs",
    "file": "Emacs.svg",
    "category": "Tools & Systems",
    "base": "Emacs"
  },
  {
    "name": "Ember",
    "file": "Ember.svg",
    "category": "Tools & Systems",
    "base": "Ember"
  },
  {
    "name": "Emotion",
    "file": "Emotion-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Emotion"
  },
  {
    "name": "Express.js",
    "file": "ExpressJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "ExpressJS"
  },
  {
    "name": "FastAPI",
    "file": "FastAPI.svg",
    "category": "Frameworks & Web",
    "base": "FastAPI"
  },
  {
    "name": "Fediverse",
    "file": "Fediverse-Dark.svg",
    "category": "Tools & Systems",
    "base": "Fediverse"
  },
  {
    "name": "Figma",
    "file": "Figma-Dark.svg",
    "category": "Tools & Systems",
    "base": "Figma"
  },
  {
    "name": "Firebase",
    "file": "Firebase-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Firebase"
  },
  {
    "name": "Flask",
    "file": "Flask-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Flask"
  },
  {
    "name": "Flutter",
    "file": "Flutter-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Flutter"
  },
  {
    "name": "Forth",
    "file": "Forth.svg",
    "category": "Languages & Runtimes",
    "base": "Forth"
  },
  {
    "name": "Fortran",
    "file": "Fortran.svg",
    "category": "Languages & Runtimes",
    "base": "Fortran"
  },
  {
    "name": "Google Cloud (GCP)",
    "file": "GCP-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "GCP"
  },
  {
    "name": "GTK",
    "file": "GTK-Dark.svg",
    "category": "Tools & Systems",
    "base": "GTK"
  },
  {
    "name": "GameMaker Studio",
    "file": "GameMakerStudio.svg",
    "category": "Tools & Systems",
    "base": "GameMakerStudio"
  },
  {
    "name": "Gatsby",
    "file": "Gatsby.svg",
    "category": "Frameworks & Web",
    "base": "Gatsby"
  },
  {
    "name": "Gherkin",
    "file": "Gherkin-Dark.svg",
    "category": "Tools & Systems",
    "base": "Gherkin"
  },
  {
    "name": "Git",
    "file": "Git.svg",
    "category": "DevOps & CI/CD",
    "base": "Git"
  },
  {
    "name": "GitLab",
    "file": "GitLab-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "GitLab"
  },
  {
    "name": "GitHub",
    "file": "Github-Dark.svg",
    "category": "Tools & Systems",
    "base": "Github"
  },
  {
    "name": "GitHub Actions",
    "file": "GithubActions-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "GithubActions"
  },
  {
    "name": "Gmail",
    "file": "Gmail-Dark.svg",
    "category": "Tools & Systems",
    "base": "Gmail"
  },
  {
    "name": "Go",
    "file": "GoLang.svg",
    "category": "Languages & Runtimes",
    "base": "GoLang"
  },
  {
    "name": "Godot",
    "file": "Godot-Dark.svg",
    "category": "Tools & Systems",
    "base": "Godot"
  },
  {
    "name": "Gradle",
    "file": "Gradle-Dark.svg",
    "category": "Tools & Systems",
    "base": "Gradle"
  },
  {
    "name": "Grafana",
    "file": "Grafana-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Grafana"
  },
  {
    "name": "GraphQL",
    "file": "GraphQL-Dark.svg",
    "category": "Frameworks & Web",
    "base": "GraphQL"
  },
  {
    "name": "Gulp",
    "file": "Gulp.svg",
    "category": "Tools & Systems",
    "base": "Gulp"
  },
  {
    "name": "HTML5",
    "file": "HTML.svg",
    "category": "Languages & Runtimes",
    "base": "HTML"
  },
  {
    "name": "Haskell",
    "file": "Haskell-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Haskell"
  },
  {
    "name": "Haxe",
    "file": "Haxe-Dark.svg",
    "category": "Tools & Systems",
    "base": "Haxe"
  },
  {
    "name": "HaxeFlixel",
    "file": "HaxeFlixel-Dark.svg",
    "category": "Tools & Systems",
    "base": "HaxeFlixel"
  },
  {
    "name": "Heroku",
    "file": "Heroku.svg",
    "category": "Cloud & Infrastructure",
    "base": "Heroku"
  },
  {
    "name": "Hibernate",
    "file": "Hibernate-Dark.svg",
    "category": "Databases & Storage",
    "base": "Hibernate"
  },
  {
    "name": "Htmx",
    "file": "Htmx-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Htmx"
  },
  {
    "name": "IPFS",
    "file": "IPFS-Dark.svg",
    "category": "Tools & Systems",
    "base": "IPFS"
  },
  {
    "name": "Idea",
    "file": "Idea-Dark.svg",
    "category": "Tools & Systems",
    "base": "Idea"
  },
  {
    "name": "Illustrator",
    "file": "Illustrator.svg",
    "category": "Tools & Systems",
    "base": "Illustrator"
  },
  {
    "name": "Instagram",
    "file": "Instagram.svg",
    "category": "Tools & Systems",
    "base": "Instagram"
  },
  {
    "name": "jQuery",
    "file": "JQuery.svg",
    "category": "Tools & Systems",
    "base": "JQuery"
  },
  {
    "name": "Java",
    "file": "Java-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Java"
  },
  {
    "name": "JavaScript",
    "file": "JavaScript.svg",
    "category": "Languages & Runtimes",
    "base": "JavaScript"
  },
  {
    "name": "Jenkins",
    "file": "Jenkins-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "Jenkins"
  },
  {
    "name": "Jest",
    "file": "Jest.svg",
    "category": "DevOps & CI/CD",
    "base": "Jest"
  },
  {
    "name": "Julia",
    "file": "Julia-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Julia"
  },
  {
    "name": "Kafka",
    "file": "Kafka.svg",
    "category": "DevOps & CI/CD",
    "base": "Kafka"
  },
  {
    "name": "Kali",
    "file": "Kali-Dark.svg",
    "category": "Tools & Systems",
    "base": "Kali"
  },
  {
    "name": "Kotlin",
    "file": "Kotlin-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Kotlin"
  },
  {
    "name": "Ktor",
    "file": "Ktor-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Ktor"
  },
  {
    "name": "Kubernetes",
    "file": "Kubernetes.svg",
    "category": "Cloud & Infrastructure",
    "base": "Kubernetes"
  },
  {
    "name": "LaTeX",
    "file": "LaTeX-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "LaTeX"
  },
  {
    "name": "Laravel",
    "file": "Laravel-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Laravel"
  },
  {
    "name": "Less",
    "file": "Less-Dark.svg",
    "category": "Tools & Systems",
    "base": "Less"
  },
  {
    "name": "LinkedIn",
    "file": "LinkedIn.svg",
    "category": "Tools & Systems",
    "base": "LinkedIn"
  },
  {
    "name": "Linux",
    "file": "Linux-Dark.svg",
    "category": "Tools & Systems",
    "base": "Linux"
  },
  {
    "name": "Lit",
    "file": "Lit-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Lit"
  },
  {
    "name": "Lua",
    "file": "Lua-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Lua"
  },
  {
    "name": "Markdown",
    "file": "Markdown-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Markdown"
  },
  {
    "name": "Mastodon",
    "file": "Mastodon-Dark.svg",
    "category": "Tools & Systems",
    "base": "Mastodon"
  },
  {
    "name": "Material UI",
    "file": "MaterialUI-Dark.svg",
    "category": "Frameworks & Web",
    "base": "MaterialUI"
  },
  {
    "name": "Matlab",
    "file": "Matlab-Dark.svg",
    "category": "AI & Data Science",
    "base": "Matlab"
  },
  {
    "name": "Maven",
    "file": "Maven-Dark.svg",
    "category": "Tools & Systems",
    "base": "Maven"
  },
  {
    "name": "Mint",
    "file": "Mint-Dark.svg",
    "category": "Tools & Systems",
    "base": "Mint"
  },
  {
    "name": "Misskey",
    "file": "Misskey-Dark.svg",
    "category": "Tools & Systems",
    "base": "Misskey"
  },
  {
    "name": "MongoDB",
    "file": "MongoDB.svg",
    "category": "Databases & Storage",
    "base": "MongoDB"
  },
  {
    "name": "MySQL",
    "file": "MySQL-Dark.svg",
    "category": "Databases & Storage",
    "base": "MySQL"
  },
  {
    "name": "NeoVim",
    "file": "NeoVim-Dark.svg",
    "category": "Tools & Systems",
    "base": "NeoVim"
  },
  {
    "name": "Nest.js",
    "file": "NestJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "NestJS"
  },
  {
    "name": "Netlify",
    "file": "Netlify-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Netlify"
  },
  {
    "name": "Next.js",
    "file": "NextJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "NextJS"
  },
  {
    "name": "Nginx",
    "file": "Nginx.svg",
    "category": "Cloud & Infrastructure",
    "base": "Nginx"
  },
  {
    "name": "Nim",
    "file": "Nim-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Nim"
  },
  {
    "name": "Nix",
    "file": "Nix-Dark.svg",
    "category": "Tools & Systems",
    "base": "Nix"
  },
  {
    "name": "Node.js",
    "file": "NodeJS-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "NodeJS"
  },
  {
    "name": "Notion",
    "file": "Notion-Dark.svg",
    "category": "Tools & Systems",
    "base": "Notion"
  },
  {
    "name": "Npm",
    "file": "Npm-Dark.svg",
    "category": "Tools & Systems",
    "base": "Npm"
  },
  {
    "name": "Nuxt.js",
    "file": "NuxtJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "NuxtJS"
  },
  {
    "name": "OCaml",
    "file": "OCaml.svg",
    "category": "Languages & Runtimes",
    "base": "OCaml"
  },
  {
    "name": "Obsidian",
    "file": "Obsidian-Dark.svg",
    "category": "Tools & Systems",
    "base": "Obsidian"
  },
  {
    "name": "Octave",
    "file": "Octave-Dark.svg",
    "category": "AI & Data Science",
    "base": "Octave"
  },
  {
    "name": "OpenCV",
    "file": "OpenCV-Dark.svg",
    "category": "AI & Data Science",
    "base": "OpenCV"
  },
  {
    "name": "Red Hat OpenShift",
    "file": "OpenShift.svg",
    "category": "Cloud & Infrastructure",
    "base": "OpenShift"
  },
  {
    "name": "OpenStack",
    "file": "OpenStack-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "OpenStack"
  },
  {
    "name": "PHP",
    "file": "PHP-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "PHP"
  },
  {
    "name": "Perl",
    "file": "Perl.svg",
    "category": "Languages & Runtimes",
    "base": "Perl"
  },
  {
    "name": "Photoshop",
    "file": "Photoshop.svg",
    "category": "Tools & Systems",
    "base": "Photoshop"
  },
  {
    "name": "PhpStorm",
    "file": "PhpStorm-Dark.svg",
    "category": "Tools & Systems",
    "base": "PhpStorm"
  },
  {
    "name": "Pinia",
    "file": "Pinia-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Pinia"
  },
  {
    "name": "Pkl",
    "file": "Pkl-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Pkl"
  },
  {
    "name": "Plan9",
    "file": "Plan9-Dark.svg",
    "category": "Tools & Systems",
    "base": "Plan9"
  },
  {
    "name": "PlanetScale",
    "file": "PlanetScale-Dark.svg",
    "category": "Databases & Storage",
    "base": "PlanetScale"
  },
  {
    "name": "Pnpm",
    "file": "Pnpm-Dark.svg",
    "category": "Tools & Systems",
    "base": "Pnpm"
  },
  {
    "name": "PostgreSQL",
    "file": "PostgreSQL-Dark.svg",
    "category": "Databases & Storage",
    "base": "PostgreSQL"
  },
  {
    "name": "Postman",
    "file": "Postman.svg",
    "category": "DevOps & CI/CD",
    "base": "Postman"
  },
  {
    "name": "Powershell",
    "file": "Powershell-Dark.svg",
    "category": "Tools & Systems",
    "base": "Powershell"
  },
  {
    "name": "Premiere",
    "file": "Premiere.svg",
    "category": "Tools & Systems",
    "base": "Premiere"
  },
  {
    "name": "Prisma",
    "file": "Prisma.svg",
    "category": "Databases & Storage",
    "base": "Prisma"
  },
  {
    "name": "Processing",
    "file": "Processing-Dark.svg",
    "category": "Tools & Systems",
    "base": "Processing"
  },
  {
    "name": "Prometheus",
    "file": "Prometheus.svg",
    "category": "Cloud & Infrastructure",
    "base": "Prometheus"
  },
  {
    "name": "Pug",
    "file": "Pug-Dark.svg",
    "category": "Tools & Systems",
    "base": "Pug"
  },
  {
    "name": "PyCharm",
    "file": "PyCharm-Dark.svg",
    "category": "Tools & Systems",
    "base": "PyCharm"
  },
  {
    "name": "PyTorch",
    "file": "PyTorch-Dark.svg",
    "category": "AI & Data Science",
    "base": "PyTorch"
  },
  {
    "name": "Python",
    "file": "Python-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Python"
  },
  {
    "name": "QT",
    "file": "QT-Dark.svg",
    "category": "Tools & Systems",
    "base": "QT"
  },
  {
    "name": "R",
    "file": "R-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "R"
  },
  {
    "name": "ROS",
    "file": "ROS-Dark.svg",
    "category": "Tools & Systems",
    "base": "ROS"
  },
  {
    "name": "RabbitMQ",
    "file": "RabbitMQ-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "RabbitMQ"
  },
  {
    "name": "Rails",
    "file": "Rails.svg",
    "category": "Frameworks & Web",
    "base": "Rails"
  },
  {
    "name": "Raspberry Pi",
    "file": "RaspberryPi-Dark.svg",
    "category": "Tools & Systems",
    "base": "RaspberryPi"
  },
  {
    "name": "React",
    "file": "React-Dark.svg",
    "category": "Frameworks & Web",
    "base": "React"
  },
  {
    "name": "ReactiveX",
    "file": "ReactiveX-Dark.svg",
    "category": "Tools & Systems",
    "base": "ReactiveX"
  },
  {
    "name": "RedHat",
    "file": "RedHat-Dark.svg",
    "category": "Tools & Systems",
    "base": "RedHat"
  },
  {
    "name": "Redis",
    "file": "Redis-Dark.svg",
    "category": "Databases & Storage",
    "base": "Redis"
  },
  {
    "name": "Redux",
    "file": "Redux.svg",
    "category": "Frameworks & Web",
    "base": "Redux"
  },
  {
    "name": "Regex",
    "file": "Regex-Dark.svg",
    "category": "Tools & Systems",
    "base": "Regex"
  },
  {
    "name": "Remix",
    "file": "Remix-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Remix"
  },
  {
    "name": "Replit",
    "file": "Replit-Dark.svg",
    "category": "Tools & Systems",
    "base": "Replit"
  },
  {
    "name": "Rider",
    "file": "Rider-Dark.svg",
    "category": "Tools & Systems",
    "base": "Rider"
  },
  {
    "name": "Roblox Studio",
    "file": "RobloxStudio.svg",
    "category": "Tools & Systems",
    "base": "RobloxStudio"
  },
  {
    "name": "Rocket",
    "file": "Rocket.svg",
    "category": "Frameworks & Web",
    "base": "Rocket"
  },
  {
    "name": "Rollup.js",
    "file": "RollupJS-Dark.svg",
    "category": "Tools & Systems",
    "base": "RollupJS"
  },
  {
    "name": "Ruby",
    "file": "Ruby.svg",
    "category": "Languages & Runtimes",
    "base": "Ruby"
  },
  {
    "name": "Rust",
    "file": "Rust.svg",
    "category": "Languages & Runtimes",
    "base": "Rust"
  },
  {
    "name": "SQLite",
    "file": "SQLite.svg",
    "category": "Databases & Storage",
    "base": "SQLite"
  },
  {
    "name": "SVG",
    "file": "SVG-Dark.svg",
    "category": "Tools & Systems",
    "base": "SVG"
  },
  {
    "name": "Sass",
    "file": "Sass.svg",
    "category": "Languages & Runtimes",
    "base": "Sass"
  },
  {
    "name": "Scala",
    "file": "Scala-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Scala"
  },
  {
    "name": "Scikit-Learn",
    "file": "ScikitLearn-Dark.svg",
    "category": "AI & Data Science",
    "base": "ScikitLearn"
  },
  {
    "name": "Selenium",
    "file": "Selenium.svg",
    "category": "DevOps & CI/CD",
    "base": "Selenium"
  },
  {
    "name": "Sentry",
    "file": "Sentry.svg",
    "category": "DevOps & CI/CD",
    "base": "Sentry"
  },
  {
    "name": "Sequelize",
    "file": "Sequelize-Dark.svg",
    "category": "Databases & Storage",
    "base": "Sequelize"
  },
  {
    "name": "Sketchup",
    "file": "Sketchup-Dark.svg",
    "category": "Tools & Systems",
    "base": "Sketchup"
  },
  {
    "name": "Solid.js",
    "file": "SolidJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "SolidJS"
  },
  {
    "name": "Solidity",
    "file": "Solidity.svg",
    "category": "Languages & Runtimes",
    "base": "Solidity"
  },
  {
    "name": "Spotify",
    "file": "Spotify-Dark.svg",
    "category": "Tools & Systems",
    "base": "Spotify"
  },
  {
    "name": "Spring",
    "file": "Spring-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Spring"
  },
  {
    "name": "Stack Overflow",
    "file": "StackOverflow-Dark.svg",
    "category": "Tools & Systems",
    "base": "StackOverflow"
  },
  {
    "name": "Styled Components",
    "file": "StyledComponents.svg",
    "category": "Frameworks & Web",
    "base": "StyledComponents"
  },
  {
    "name": "Sublime",
    "file": "Sublime-Dark.svg",
    "category": "Tools & Systems",
    "base": "Sublime"
  },
  {
    "name": "Supabase",
    "file": "Supabase-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Supabase"
  },
  {
    "name": "Svelte",
    "file": "Svelte.svg",
    "category": "Frameworks & Web",
    "base": "Svelte"
  },
  {
    "name": "Swift",
    "file": "Swift.svg",
    "category": "Languages & Runtimes",
    "base": "Swift"
  },
  {
    "name": "Symfony",
    "file": "Symfony-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Symfony"
  },
  {
    "name": "Tailwind CSS",
    "file": "TailwindCSS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "TailwindCSS"
  },
  {
    "name": "Tauri",
    "file": "Tauri-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Tauri"
  },
  {
    "name": "TensorFlow",
    "file": "TensorFlow-Dark.svg",
    "category": "AI & Data Science",
    "base": "TensorFlow"
  },
  {
    "name": "Terraform",
    "file": "Terraform-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Terraform"
  },
  {
    "name": "Three.js",
    "file": "ThreeJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "ThreeJS"
  },
  {
    "name": "Twitter",
    "file": "Twitter.svg",
    "category": "Tools & Systems",
    "base": "Twitter"
  },
  {
    "name": "TypeScript",
    "file": "TypeScript.svg",
    "category": "Languages & Runtimes",
    "base": "TypeScript"
  },
  {
    "name": "Ubuntu",
    "file": "Ubuntu-Dark.svg",
    "category": "Tools & Systems",
    "base": "Ubuntu"
  },
  {
    "name": "Unity",
    "file": "Unity-Dark.svg",
    "category": "Tools & Systems",
    "base": "Unity"
  },
  {
    "name": "Unreal Engine",
    "file": "UnrealEngine.svg",
    "category": "Tools & Systems",
    "base": "UnrealEngine"
  },
  {
    "name": "V",
    "file": "V-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "V"
  },
  {
    "name": "VIM",
    "file": "VIM-Dark.svg",
    "category": "Tools & Systems",
    "base": "VIM"
  },
  {
    "name": "VS Code",
    "file": "VSCode-Dark.svg",
    "category": "Tools & Systems",
    "base": "VSCode"
  },
  {
    "name": "VSCodium",
    "file": "VSCodium-Dark.svg",
    "category": "Tools & Systems",
    "base": "VSCodium"
  },
  {
    "name": "Vala",
    "file": "Vala.svg",
    "category": "Languages & Runtimes",
    "base": "Vala"
  },
  {
    "name": "Vercel",
    "file": "Vercel-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Vercel"
  },
  {
    "name": "Verilog",
    "file": "Verilog.svg",
    "category": "Languages & Runtimes",
    "base": "Verilog"
  },
  {
    "name": "VisualStudio",
    "file": "VisualStudio-Dark.svg",
    "category": "Tools & Systems",
    "base": "VisualStudio"
  },
  {
    "name": "Vite",
    "file": "Vite-Dark.svg",
    "category": "Tools & Systems",
    "base": "Vite"
  },
  {
    "name": "Vitest",
    "file": "Vitest-Dark.svg",
    "category": "DevOps & CI/CD",
    "base": "Vitest"
  },
  {
    "name": "Vue.js",
    "file": "VueJS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "VueJS"
  },
  {
    "name": "Vuetify",
    "file": "Vuetify-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Vuetify"
  },
  {
    "name": "WebAssembly",
    "file": "WebAssembly.svg",
    "category": "Languages & Runtimes",
    "base": "WebAssembly"
  },
  {
    "name": "WebStorm",
    "file": "WebStorm-Dark.svg",
    "category": "Tools & Systems",
    "base": "WebStorm"
  },
  {
    "name": "Webflow",
    "file": "Webflow.svg",
    "category": "Tools & Systems",
    "base": "Webflow"
  },
  {
    "name": "Webpack",
    "file": "Webpack-Dark.svg",
    "category": "Tools & Systems",
    "base": "Webpack"
  },
  {
    "name": "Windi CSS",
    "file": "WindiCSS-Dark.svg",
    "category": "Frameworks & Web",
    "base": "WindiCSS"
  },
  {
    "name": "Windows",
    "file": "Windows-Dark.svg",
    "category": "Tools & Systems",
    "base": "Windows"
  },
  {
    "name": "Wordpress",
    "file": "Wordpress.svg",
    "category": "Tools & Systems",
    "base": "Wordpress"
  },
  {
    "name": "Workers",
    "file": "Workers-Dark.svg",
    "category": "Cloud & Infrastructure",
    "base": "Workers"
  },
  {
    "name": "XD",
    "file": "XD.svg",
    "category": "Tools & Systems",
    "base": "XD"
  },
  {
    "name": "Yarn",
    "file": "Yarn-Dark.svg",
    "category": "Tools & Systems",
    "base": "Yarn"
  },
  {
    "name": "Yew",
    "file": "Yew-Dark.svg",
    "category": "Frameworks & Web",
    "base": "Yew"
  },
  {
    "name": "Zig",
    "file": "Zig-Dark.svg",
    "category": "Languages & Runtimes",
    "base": "Zig"
  },
  {
    "name": "p5js",
    "file": "p5js.svg",
    "category": "Frameworks & Web",
    "base": "p5js"
  }
];
