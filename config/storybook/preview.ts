import { ReduxToolkitDecorator } from "../../src/shared/config/storybook/ReduxToolkitDecorator/ReduxToolkitDecorator";
import { MemoryRouterDecorator } from "../../src/shared/config/storybook/MemoryRouterDecorator/MemoryRouterDecorator";
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
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        MemoryRouterDecorator,
        ReduxToolkitDecorator
    ]
};

export default preview;
