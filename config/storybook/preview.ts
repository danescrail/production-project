import { MemoryRouterDecorator } from "shared/config/storybook/MemoryRouterDecorator/MemoryRouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), MemoryRouterDecorator]
};

export default preview;
