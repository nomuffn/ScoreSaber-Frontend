/// <reference types="@sveltejs/kit" />
interface Window {
   adsbygoogle: { [key: string]: unknown }[];
   canRunAds: boolean | undefined;
}
