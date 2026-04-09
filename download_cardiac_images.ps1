
$outputDir = ".\frontend\src\assets\products\cardiac"
if (!(Test-Path $outputDir)) { New-Item -ItemType Directory -Path $outputDir | Out-Null }

$products = @(
  "lotensyl-lercanidipine",
  "irovel-irbesartan",
  "zytanix-metolazone",
  "zocor-simvastatin",
  "xarelto-20mg-rivaroxaban",
  "vymada-sacubitril-valsartan",
  "valzaar-160-mg-valsartan",
  "triplixam-tablet-perindopril-erbumine-indapamide-and-amlodipine",
  "terapress-terazosin",
  "telma-r-telmisartan-and-ramipril-tablet",
  "telma-beta-tablet-er-telmisartan-and-metoprolol-succinate",
  "sumatriptan-tablet-1",
  "rosubest-rosuvastatin",
  "rioteph-riociguat",
  "refsav-tablet-sacubitril-and-valsartan",
  "ramnil-t-tablet-telmisartan-and-ramipril",
  "ramistar-h-tablet-ramipril-and-hydrochlorothiazide",
  "q-press-h-tablet-quinapril-and-hydrochlorothiazide",
  "provanol-propranolol-1",
  "pivasta-pitavastatin",
  "olmesar-olmesartan",
  "nexred-tablet-bempedoic-acid",
  "nebicard-nebivolol",
  "mymarda-tablet-sacubitril-and-valsartan",
  "losar-losartan-potassium",
  "listril-plus-tablet-lisinopril-and-hydrochlorothiazide",
  "listril-lisinopril",
  "lipicard-fenofibrate",
  "labebet-tablet-labetalol",
  "kerendia-finerenone",
  "hftril-tablet-sacubitril-and-valsartan",
  "ezentia-tablet-ezetimibe",
  "ezedoc-tablet-ezetimibe",
  "eptus-eplerenone",
  "endobloc-ambrisentan",
  "enapril-ht-tablet-enalapril-hydrochlorothiazide",
  "enapril-tablet-enalapril",
  "cytogard-trimetazidine",
  "coversyl-plus-tablet-perindopril-erbumine-and-indapamide",
  "cardace-h-tablet-ramipril-hydrochlorothiazide",
  "brillo-tablet-bempedoic-acid",
  "bosentas-bosentan",
  "bemzire-tablet-bempedoic-acid",
  "bempify-tablet-bempedoic-acid",
  "atorva-atorvastatin",
  "aspisol-tablet-aspirin-and-glycine",
  "arnx-tablet-sacubitril-valsartan",
  "arnipin-tablet-sacubitril-and-valsartan",
  "arney-tablet",
  "arkamin-tablet-clonidine",
  "alsectan-tablet-sacubitril-and-valsartan",
  "alpostin-injection-alprostadil"
)

$index = 1
foreach ($slug in $products) {
    $paddedIndex = $index.ToString("D2")
    $outFile = "$outputDir\$paddedIndex-$slug.jpg"
    
    if (Test-Path $outFile) {
        Write-Host "[$paddedIndex] Skipping (already exists): $slug"
        $index++
        continue
    }
    
    Write-Host "[$paddedIndex] Fetching page for: $slug"
    
    try {
        $url = "https://www.ivermectinkart.com/product-page/$slug"
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        $html = $response.Content
        
        # Extract og:image meta tag
        $ogImageMatch = [regex]::Match($html, '<meta property="og:image" content="([^"]+)"')
        if ($ogImageMatch.Success) {
            $imgUrl = $ogImageMatch.Groups[1].Value
            Write-Host "  Found OG image: $imgUrl"
            Invoke-WebRequest -Uri $imgUrl -OutFile $outFile -UseBasicParsing -TimeoutSec 30
            Write-Host "  Saved to: $outFile"
        } else {
            # Try wixstatic pattern from page content
            $wixMatch = [regex]::Match($html, 'https://static\.wixstatic\.com/media/[a-z0-9_~\.]+\.(?:jpg|jpeg|png|webp)')
            if ($wixMatch.Success) {
                $imgUrl = $wixMatch.Value
                Write-Host "  Found wix image: $imgUrl"
                Invoke-WebRequest -Uri $imgUrl -OutFile $outFile -UseBasicParsing -TimeoutSec 30
                Write-Host "  Saved to: $outFile"
            } else {
                Write-Host "  WARNING: No image found for $slug"
            }
        }
    } catch {
        Write-Host "  ERROR fetching $slug : $_"
    }
    
    Start-Sleep -Milliseconds 500
    $index++
}

Write-Host ""
Write-Host "Done! Check $outputDir for downloaded images."
