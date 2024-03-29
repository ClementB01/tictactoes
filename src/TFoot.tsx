import * as React from "react";

import { Winner } from './game_logique'

export type TFootProps = {
    winner: Winner
  };

const TFoot: React.FC<TFootProps> = tFootProps => {
    return (
        <tfoot>
            <tr>
                <td colSpan={3}>
                {tFootProps.winner ? "Player " + tFootProps.winner + " wins" : " "}
                </td>
            </tr>
        </tfoot>
    );
};

export default TFoot;