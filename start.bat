@echo off
echo Starting GearGuard Backend...
echo.
echo Make sure MongoDB is running on your system
echo Connection string: mongodb+srv://Kaushlendra:<db_password>@cluster0.fa6yccn.mongodb.net/gearguard
echo.
echo Replace <db_password> in .env file with your actual password
echo.
pause
node server.js