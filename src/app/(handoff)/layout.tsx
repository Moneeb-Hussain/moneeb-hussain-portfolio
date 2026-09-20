import { SkipToContent } from "@/components/common/SkipToContent";
import { ThemeProvider } from "@/components/handoff/theme";

export default function HandoffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="pf">
        <SkipToContent />
        {children}
      </div>
    </ThemeProvider>
  );
}
