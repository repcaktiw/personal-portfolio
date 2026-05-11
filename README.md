# KW_page

Portfolio / strona wizytówkowa zbudowana w **Next.js (App Router)** i **TypeScript**.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Docker** / `docker compose` (zalecane do uruchamiania)

## Wymagania

- **Docker Desktop** (zalecane) — repo ma gotową konfigurację Dockera, więc nie trzeba instalować lokalnie Node/npm/pnpm.

## Uruchomienie (Docker)

Pamiętaj o uruchomieniu Docker Desktop
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

### Komendy developerskie (w kontenerze)

Jeśli nie masz lokalnie Node/pnpm, uruchom komendy przez serwis `web`:

```powershell
# lint
docker compose exec -T web pnpm lint

# build (stabilny: skrypt ustawia NODE_ENV=production)
docker compose exec -T web pnpm build
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
