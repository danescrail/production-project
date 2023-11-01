import React from "react";
import { Decorator, StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider";

export const ReduxToolkitDecorator: Decorator = (Story: StoryFn) => {
    return (
        <Provider store={createReduxStore()} >
            <Story />
        </Provider>
    );
}