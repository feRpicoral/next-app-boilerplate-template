import 'styled-components';

declare module 'styled-components' {
    /*
     * Customize the interface for your theme here
     * This will provide intellisense when using ${props => props.theme.} in
     * a styled component
     */
    export interface DefaultTheme {
        colors: {
            background: string;
            text: string;
        };
    }
}
