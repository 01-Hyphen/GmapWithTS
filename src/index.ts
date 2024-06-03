import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const map =  new CustomMap('#map');

const user = new User();
const comany = new Company()
map.addMarker(user);
map.addMarker(comany);
