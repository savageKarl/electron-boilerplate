/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 使用 class 策略
  theme: {
    extend: {},
  },
  // 在 v4 中，我们需要使用不同的方式处理 Ant Design 样式冲突
  future: {
    hoverOnlyWhenSupported: true,
  },
};
