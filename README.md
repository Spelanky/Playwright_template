# Test_project_structure_TS_lection 16
An example of the structure of a text project in TS (lecture 16 of the AQA course)

Template for new projects
installed:
- eslint
- prettier
- huskey

PW need to be installed:
npm init playwright@latest

Выбираем:
- TypeScript
- src/ui/tests
- false
- true

Добавляем в tsconfig:
"include": ["src", "playwright.config.ts"]
