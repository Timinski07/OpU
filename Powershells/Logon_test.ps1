#try{
#$acommand = "C:\Windows\System32\Cscript.exe C:\OpU\Autos\autostart.vbs"  

#Invoke-Expression $acommand -ErrorAction stop
#Get-Item -Path C:\OpU\Auto\autostart.vbs -ErrorAction stop
#}
#catch{
#$message = "issue: $($PSItem.ToString())"
#$message | Out-File C:\OpU\Docs\log.txt -Encoding utf8
#}
$x = Get-Random -Minimum 01 -Maximum 100
New-Item -Name $x -Path C:\OpU -ItemType directory

#Start-Sleep -s 10


