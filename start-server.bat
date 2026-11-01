@echo off
title Kashi Darshan Backend Server
echo ========================================================
echo   Kashi Darshan & Heritage Portal - Node.js API Server
echo ========================================================
set PATH=%~dp0.tools\node;%PATH%
npm run server
pause
