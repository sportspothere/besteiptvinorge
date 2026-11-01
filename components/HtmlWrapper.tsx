"use client";

interface HtmlWrapperProps {
  children: React.ReactNode;
  fontVars?: string;
}

export default function HtmlWrapper({ children, fontVars }: HtmlWrapperProps) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="nb-NO" className={`${fontVars || ""} dark`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.classList.toggle('dark',localStorage.getItem('theme')!=='light')}catch{}` }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
