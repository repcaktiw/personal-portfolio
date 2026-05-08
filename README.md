# KW_page

Portfolio / strona wizytówkowa zbudowana w **Next.js (App Router)** i **TypeScript**.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Docker** / `docker compose` (zalecane do uruchamiania)

## Wymagania

- **Docker Desktop** (zalecane) — repo ma gotową konfigurację Dockera, więc nie musisz instalować lokalnie Node/npm/pnpm.

## Uruchomienie (Docker)

W katalogu projektu:

### Dev (hot reload)

```powershell
docker compose up --build
```

Otwórz `http://localhost:3000`.

Zatrzymanie:

```powershell
docker compose down
```

### Prod (zbudowany obraz)

```powershell
docker compose --profile prod up --build web-prod
```

Otwórz `http://localhost:3000`.

## Notatki

- Serwis dev montuje repo do kontenera dla szybkiej iteracji.
- Obraz produkcyjny korzysta z outputu Next.js w trybie **standalone**.

## Troubleshooting

- **`docker` is not recognized**: doinstaluj Docker Desktop i uruchom ponownie terminal.
- **Port 3000 zajęty**: zatrzymaj proces lub zmień mapowanie w `docker-compose.yml` (np. `3001:3000`).

## GitHub (pierwsze wypchnięcie)

Po inicjalizacji repozytorium i pierwszym commicie:

```powershell
git branch -M main
git remote add origin https://github.com/<twoj-login>/<nazwa-repo>.git
git push -u origin main
```

