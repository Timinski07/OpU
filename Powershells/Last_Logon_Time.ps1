#$Computer = "DESKTOP-5094R8J"
#$x = Get-EventLog -ComputerName $Computer -LogName 'Security' -InstanceId 4634 -newest 1 | Select-object TimeGenerated
#Write-Host($x)
Import-Module ActiveDirectory
Get-ADUser „“ -Properties LastLogonDate | Sort-Object -Property LastLogonDate -descending | FT -Property Name, LastLogonDate -A
Get-ADUser -Identity "username" -Properties "LastLogonDate"