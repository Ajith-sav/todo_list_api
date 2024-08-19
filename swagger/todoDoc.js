/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: API for managing to-do items
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Retrieve a list of to-do items
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of to-do items
 *       401:
 *         description: Unauthorized
 */



/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new to-do item
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               detail:
 *                 typt: string
 *     responses:
 *       201:
 *         description: To-do item created successfully
 *       401:
 *         description: Unauthorized
 */


/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update an existing to-do item
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the to-do item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               detail:
 *                  type: string
 *               completed:
 *                 type: boolean
 *               inProcess:
 *                 type: boolean
 *               isDeleted:
 *                 type: boolean
 *               
 *     responses:
 *       200:
 *         description: To-do item updated successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Server error
 */