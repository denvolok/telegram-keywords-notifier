/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { getBot } from "./bot";
import logger from "./utils/logger";

getBot().start().catch(logger.error);
