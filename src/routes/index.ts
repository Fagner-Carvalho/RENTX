import { Router } from "express";

import { categoriesRountes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRountes);
router.use("/specifications", specificationsRoutes);

export { router };
