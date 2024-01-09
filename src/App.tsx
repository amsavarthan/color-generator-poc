import { useEffect, useState } from 'react';
import { argbFromHex, themeFromSourceColor, hexFromArgb } from "@material/material-color-utilities";
import './App.css'

function App() {
  const [color, setColor] = useState("#984061")
  const [theme, setTheme] = useState(themeFromSourceColor(argbFromHex(color)))

  useEffect(() => {
    setTheme(themeFromSourceColor(argbFromHex(color)))
  }, [color])

  const handleColorChange = ({ target: { value: color } }: React.ChangeEvent<HTMLInputElement>) => {
    setColor(color)
    console.log(color)
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
    <p>{JSON.stringify(theme.schemes.light,null,2)}</p>
    <p>{JSON.stringify(theme.schemes.dark,null,2)}</p>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <p>Light Scheme</p>
        <ColorPalette name="Primary" backgroundColor={hexFromArgb(theme.schemes.light.primary)} color={hexFromArgb(theme.schemes.light.onPrimary)} />
        <ColorPalette name="Secondary" backgroundColor={hexFromArgb(theme.schemes.light.secondary)} color={hexFromArgb(theme.schemes.light.onSecondary)} />
        <ColorPalette name="Tertiary" backgroundColor={hexFromArgb(theme.schemes.light.tertiary)} color={hexFromArgb(theme.schemes.light.onTertiary)} />
      </div>
      <div>
        <p>Dark Scheme</p>
        <ColorPalette name="Primary" backgroundColor={hexFromArgb(theme.schemes.dark.primary)} color={hexFromArgb(theme.schemes.dark.onPrimary)} />
        <ColorPalette name="Secondary" backgroundColor={hexFromArgb(theme.schemes.dark.secondary)} color={hexFromArgb(theme.schemes.dark.onSecondary)} />
        <ColorPalette name="Tertiary" backgroundColor={hexFromArgb(theme.schemes.dark.tertiary)} color={hexFromArgb(theme.schemes.dark.onTertiary)} />
      </div>
    </div>
    <input type='color' value={color} onChange={handleColorChange} />
  </div>
}

type ColorPaletteProps = {
  name: string
  backgroundColor: string
  color: string
}

function ColorPalette({ name, backgroundColor, color }: ColorPaletteProps) {
  return <div style={{
    display: 'block',
    width: '100',
    backgroundColor: backgroundColor,
    padding: 16,
    color: color
  }}>{name}: {backgroundColor}</div>
}

export default App
