import { ref, onMounted } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const setTheme = dark => {
    isDark.value = dark
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0d0d0d')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f5f5f7')
    }
    localStorage.setItem('papara-theme', isDark.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('papara-theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = true
    }
    updateTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  }
}
