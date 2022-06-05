import { Button, ButtonTypes } from "./components/Button";

export const MaterialContainer = () => {
    return <>
        <Button
            type={ButtonTypes.ghostSmall}
            iconRight='local-offer'
        >
            Create
        </Button>
    </>;
}