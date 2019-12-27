import { Schema, Document} from "mongoose";
import * as mongoose from "mongoose";

export interface HeroInterface extends Document {
  name: string;
  status: string;
}

const HeroSchema = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
  }, 
  {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
);

const Hero = mongoose.model<HeroInterface>("Hero", HeroSchema);
export default Hero;