$port = 3000
$dir  = if ($PSScriptRoot) { $PSScriptRoot } else { "C:\Users\amber\OneDrive\Documents\GitHub\9th-Grade-Survival" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $dir on http://localhost:$port"

while ($true) {
    try {
        $ctx  = $listener.GetContext()
        $req  = $ctx.Request
        $res  = $ctx.Response

        $path = $req.Url.LocalPath
        if ($path -eq '/' -or $path -eq '') { $path = '/standalone.html' }
        $file = Join-Path $dir ($path.TrimStart('/').Replace('/', '\'))
        Write-Host "$($req.HttpMethod) $path"

        if (Test-Path $file -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $ext   = [System.IO.Path]::GetExtension($file).ToLower()
            $res.ContentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.js'   { 'application/javascript' }
                '.css'  { 'text/css' }
                default { 'application/octet-stream' }
            }
            $res.StatusCode      = 200
            $res.KeepAlive       = $false
            $res.ContentLength64 = $bytes.LongLength
            if ($req.HttpMethod -ne 'HEAD') {
                $res.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            Write-Host "  -> 404: $file"
            $b = [System.Text.Encoding]::UTF8.GetBytes('Not found')
            $res.StatusCode      = 404
            $res.KeepAlive       = $false
            $res.ContentLength64 = $b.LongLength
            if ($req.HttpMethod -ne 'HEAD') {
                $res.OutputStream.Write($b, 0, $b.Length)
            }
        }
    } catch {
        Write-Host "ERROR: $_"
    } finally {
        try { $res.OutputStream.Close() } catch {}
    }
}
