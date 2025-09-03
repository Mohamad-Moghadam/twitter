import { CounterButton } from "./CounterButton";
import { LikeMe } from "./LikeButton";
import { LManager } from "./ListManager";
import { PassTog } from "./PasswordToggle";
import { SHText } from "./ShowHideText";

export function Index() {
    return <>
    <CounterButton/>
    <LikeMe/>
    <SHText/>
    <PassTog/>
    <LManager/>
    </>
}