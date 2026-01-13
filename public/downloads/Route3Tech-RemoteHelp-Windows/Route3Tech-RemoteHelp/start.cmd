@echo off
setlocal

REM Create RustDesk config folder for this user
set "CFGDIR=%APPDATA%\RustDesk\config"
if not exist "%CFGDIR%" mkdir "%CFGDIR%"

REM Copy preconfigured settings
copy /Y "%~dp0RustDesk2.toml" "%CFGDIR%\RustDesk2.toml" >nul

REM Launch RustDesk
start "" "%~dp0rustdesk.exe"

endlocal
