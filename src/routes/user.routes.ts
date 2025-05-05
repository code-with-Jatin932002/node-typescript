// import { Router } from 'express';
// import { UserController } from '../controllers/user.controller';

// const router = Router();

// router.get('/', UserController.getAll);


// export default router;


import { Router } from 'express';
import { UserController } from '../controllers/user.controller';  // Ensure the path is correct

const router = Router();

// Ensure these methods exist and are correctly defined in your UserController
router.get('/', UserController.getAll);  // This will fetch all users
router.post('/', UserController.create); // This will create a new user

export default router;
