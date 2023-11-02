import Toast from 'react-native-root-toast';

const colors = {
  info: ['#0D73DA', '#012A54'],
  success: ['#00B26A', '#033D26'],
  warning: ['#FFA900', '#4C2C00'],
  error: ['#FF3D71', '#4C0B1D'],
  default: ['#012A54', '#012A54'],
}

/**
 * Props for the Toast component.
 * @interface ToastProps
 * @property {keyof typeof colors} [type] - The type of the toast. Defaults to undefined.
 * @property {string} message - The message to be displayed in the toast.
 * @property {'short' | 'long'} [duration] - The duration of the toast. Defaults to 'short'.
 * @property {'top' | 'center' | 'bottom'} [position] - The position of the toast. Defaults to 'bottom'.
 * @property {Object} [config] - Additional configuration options for the toast.
 * @property {number} [config.opacity] - The opacity of the toast. Defaults to undefined.
 * @property {number} [config.autoHideMs] - The time in milliseconds before the toast automatically hides.
 */
interface ToastProps {
  type?: keyof typeof colors
  message: string
  duration?: 'short' | 'long'
  position?: 'top' | 'center' | 'bottom'
  config?: {
    opacity?: number;
    autoHideMs?: number;
    // fadeInMs?: number;
    // fadeOutMs?: number;
  }
}

/**
 * Shows a toast message with the specified configuration.
 * @param {ToastProps} props - The toast configuration properties.
 * @param {string} props.type - The type of toast message.
 * @param {string} props.message - The message to display in the toast.
 * @param {string} props.duration - The duration of the toast message.
 * @param {string} props.position - The position of the toast message.
 * @param {object} props.config - The configuration object for the toast message.
 * @param {number} props.config.autoHideMs - The time in milliseconds for the toast message to auto-hide.
 * @returns {void}
 */
export const showToast = ({ 
  type, 
  message,
  duration,
  position,
  config
}: ToastProps) => {
  const [ backgroundColor, colorType ] = colors[type || 'default']
  
  const { autoHideMs = 1000 } = config || {}
  const { LONG, SHORT } = Toast.durations
  const { BOTTOM, CENTER, TOP } = Toast.positions

  return Toast.show(message, {
    duration: duration === 'short' ? SHORT : LONG,
    position: position === 'bottom' ? BOTTOM : position === 'center' ? CENTER : TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: autoHideMs,
    visible: true,
    textStyle: { color: 'white' },
    containerStyle: { 
      borderRadius: 8, 
      borderColor: colorType,
      backgroundColor,
      borderLeftWidth: 8, 
      padding: 18, 
    },
    opacity: config?.opacity,
  });
}
