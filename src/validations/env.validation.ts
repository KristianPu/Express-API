import { BadRequestError } from "../middlewares/errorHandler";

const dotenv = require("dotenv");
const joi = require("joi");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const envSchema = joi.object().keys({
    NODE_ENV: joi.string().valid("production", "development", "test").required(),
    PORT: joi.number().required(),
    MONGODB_URI: joi.string().required().description('Mongo DB uri'),
    JWT_SECRET: joi.string().required().description('JWT secret key'),
  })
  .unknown();

export const validateEnvVars = () => {
    const { error, value: envVars } = envSchema.prefs({ errors: { label: "key" } }).validate(process.env);

    if (error) {
        throw new BadRequestError(`Config validation error: ${error.message}`);
    }

    return envVars;
};