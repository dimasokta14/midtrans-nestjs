import {Inject} from '@nestjs/common'
import { midtransToken } from "src/constants";

export function InjectMidtrans(){
    return Inject(midtransToken)
}