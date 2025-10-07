import { codeToHtml, type BundledLanguage, type BundledTheme } from 'shiki'

export const useCodeHighlight = () => {
  const highlightCode = async (
    code: string,
    lang: BundledLanguage = 'typescript',
    theme: BundledTheme = 'github-dark'
  ) => {
    try {
      const html = await codeToHtml(code, {
        lang,
        theme,
      })
      return html
    } catch (error) {
      console.error('Error highlighting code:', error)
      // Fallback to plain code if highlighting fails
      return `<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8"><code>${escapeHtml(code)}</code></pre>`
    }
  }

  return {
    highlightCode
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

