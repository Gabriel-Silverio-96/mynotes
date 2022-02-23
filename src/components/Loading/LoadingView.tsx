import React from "react";
import { LoadingContainer, LoadingSvg } from "./styled";
import { ILoading } from "./types/types.component";

const LoadingView: React.FC<ILoading> = (props) => {
    const { isLoading, justIcon, align, messageLoading, size, ...rest } = props;
    return (
        <LoadingContainer isLoading={isLoading} align={align} {...rest}>
            <LoadingSvg>
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 72.996 73">
                    <g id="Path_50" transform="translate(0 -1234)" fill="none">
                        <path d="M36.5,1307a36.5,36.5,0,1,1,0-73c.182,0,.345,0,.5,0v12c-.155,0-.323-.005-.5-.005A24.5,24.5,0,1,0,61,1271H73a36.468,36.468,0,0,1-36.5,36Z" stroke="none" />
                        <path d="M 36.50040054321289 1306.999877929688 C 31.57254600524902 1306.999877929688 26.79248237609863 1306.034912109375 22.29300498962402 1304.131713867188 C 17.94804573059082 1302.294555664062 14.04429531097412 1299.662841796875 10.69021224975586 1296.309692382812 C 7.338608264923096 1292.957153320312 4.706941604614258 1289.0537109375 2.868295669555664 1284.707763671875 C 0.965045690536499 1280.208251953125 4.038492988911457e-06 1275.42822265625 4.038492988911457e-06 1270.500366210938 C 4.038492988911457e-06 1265.572509765625 0.965045690536499 1260.79248046875 2.868295669555664 1256.29296875 C 4.706691741943359 1251.946655273438 7.338358402252197 1248.042846679688 10.69021224975586 1244.690185546875 C 14.04290008544922 1241.338256835938 17.9466495513916 1238.706665039062 22.29300498962402 1236.868408203125 C 26.79252433776855 1234.964965820312 31.57258796691895 1233.999877929688 36.50040054321289 1233.999877929688 C 36.68206787109375 1233.999877929688 36.84546279907227 1234.001098632812 36.99990081787109 1234.003540039062 L 36.99990081787109 1246.005493164062 C 36.84475326538086 1246.002563476562 36.67704391479492 1246.00048828125 36.50040054321289 1246.00048828125 C 22.99067115783691 1246.00048828125 11.9996919631958 1256.991088867188 11.9996919631958 1270.500366210938 C 11.9996919631958 1284.009521484375 22.99067115783691 1295.000122070312 36.50040054321289 1295.000122070312 C 49.74229431152344 1295.000122070312 60.73060989379883 1284.233642578125 60.99517059326172 1270.999877929688 L 72.99629211425781 1270.999877929688 C 72.93058776855469 1275.875854492188 71.91950225830078 1280.596557617188 69.99208831787109 1285.03173828125 C 68.12823486328125 1289.321899414062 65.48779296875 1293.171142578125 62.14410781860352 1296.472534179688 C 58.7996711730957 1299.775756835938 54.9152946472168 1302.368041992188 50.59889984130859 1304.177490234375 C 46.13043975830078 1306.05029296875 41.38702392578125 1306.999877929688 36.50040054321289 1306.999877929688 Z" stroke="none" fill="#9c10ff" />
                    </g>
                </svg>
            </LoadingSvg>

            {!justIcon && messageLoading ? <p>{messageLoading}</p> : ""}
        </LoadingContainer>
    )
}

export default LoadingView;