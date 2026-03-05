-- Archivo: seed_data.sql
-- Descripción: Inserta datos de ejemplo para poblar las tablas según las entidades y relaciones del proyecto.

-- Roles
INSERT INTO roles (name, description) VALUES
('admin', 'Administrator with full access'),
('user', 'Regular user with limited access'),
('moderator', 'Can manage content and moderate comments');

-- Permissions
INSERT INTO permissions (name, description) VALUES
('create', 'Create new resources'),
('read', 'Read resources'),
('update', 'Update existing resources'),
('delete', 'Delete resources'),
('manage_users', 'Manage user accounts'),
('manage_roles', 'Manage roles and permissions'),
('moderate_comments', 'Approve or remove comments');

-- Role - Permission relationshx    ips
-- Asume ids secuenciales: roles (1=admin,2=user,3=moderator) y permissions (1..7)
INSERT INTO role_permissions (role_id, permission_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), -- admin: todo
(2, 2), (2, 1),                                       -- user: read y create
(3, 2), (3, 7);                                       -- moderator: read y moderar comentarios

-- Users
-- Campos: username, email, password_hash, bio, role_id, created_at
INSERT INTO users (username, email, password_hash, bio, role_id, created_at) VALUES
('admin_user', 'admin@example.com', '$2b$10$hashedpassword1', 'Administrator account', 1, NOW()),
('juan_perez', 'juan@example.com', '$2b$10$hashedpassword2', 'Lover of board games', 2, NOW()),
('maria_garcia', 'maria@example.com', '$2b$10$hashedpassword3', 'Strategic games enthusiast', 2, NOW()),
('carlos_lopez', 'carlos@example.com', '$2b$10$hashedpassword4', 'Party games fan', 2, NOW()),
('ana_martinez', 'ana@example.com', '$2b$10$hashedpassword5', 'Competitive player', 2, NOW()),
('luis_fernandez', 'luis@example.com', '$2b$10$hashedpassword6', 'Game collector', 2, NOW()),
('sofia_admin', 'sofia@example.com', '$2b$10$hashedpassword7', 'Content moderator', 3, NOW());

-- Games
-- Campos: name, description, min_players, max_players, category, created_by
INSERT INTO games (name, description, min_players, max_players, category, created_by) VALUES
('Chess', 'The classic strategy game of kings', 2, 2, 'strategy', 2),
('Catan', 'Build and trade on an island', 3, 4, 'strategy', 3),
('Carcassonne', 'Tile-placement medieval landscape', 2, 5, 'abstract', 4),
('Pandemic', 'Cooperative disease-fighting game', 2, 4, 'cooperative', 5),
('Codenames', 'Guess secret words with clues', 2, 8, 'party', 6),
('Dice Masters', 'Fast dice-based battles', 2, 4, 'dice', 2);

-- Sessions
-- Campos: game_id, host_id, date_session, status, notes
-- Valores válidos para status: 'scheduled','ongoing','completed','cancelled'
INSERT INTO sessions (game_id, host_id, date_session, status, notes) VALUES
(1, 2, NOW() - INTERVAL '3 days', 'completed', 'Tournament final'),
(4, 5, NOW() - INTERVAL '1 day', 'completed', 'Co-op weekend'),
(2, 3, NOW() + INTERVAL '2 days', 'scheduled', 'Catan night'),
(5, 6, NOW() - INTERVAL '12 hours', 'completed', 'Party with friends');

-- Participants
-- Campos: session_id, user_id, score, position, is_winner
INSERT INTO participants (session_id, user_id, score, position, is_winner) VALUES
(1, 2, 120, 1, true),
(1, 3, 95, 2, false),
(1, 4, 70, 3, false),
(2, 5, 85, 1, true),
(2, 6, 60, 2, false),
(3, 3, 0, 0, false), -- sesión programada: sin puntuaciones aún
(4, 6, 40, 1, true),
(4, 2, 30, 2, false);

-- Comments
-- Campos: content, user_id, game_id, created_at
INSERT INTO comments (content, user_id, game_id, created_at) VALUES
('Great game! Very strategic and engaging.', 2, 1, NOW() - INTERVAL '3 days'),
('Catan is perfect for game nights with friends!', 3, 2, NOW() - INTERVAL '3 days'),
('Love the tile-placement mechanics in Carcassonne', 4, 3, NOW() - INTERVAL '1 day'),
('Pandemic is an excellent cooperative experience', 5, 4, NOW() - INTERVAL '1 day'),
('Codenames is so much fun with large groups!', 6, 5, NOW() - INTERVAL '12 hours'),
('Chess never gets old', 3, 1, NOW() - INTERVAL '12 hours'),
('Building trade routes in Catan is addictive', 4, 2, NOW() - INTERVAL '6 hours');

-- Nota: Asegúrate de que las tablas y las restricciones (FK, enums) estén creadas
-- antes de ejecutar este script. Ajusta los valores de NOW() y los intervalos si tu
-- motor SQL no soporta la sintaxis exacta (ej. en MySQL usa DATE_SUB(NOW(), INTERVAL X DAY)).
