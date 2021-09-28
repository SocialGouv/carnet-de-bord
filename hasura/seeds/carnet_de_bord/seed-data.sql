TRUNCATE public.structure CASCADE;
TRUNCATE public.beneficiary CASCADE;
TRUNCATE public.admin CASCADE;
TRUNCATE public.professional CASCADE;
TRUNCATE public.notebook CASCADE;
TRUNCATE public.ref_target CASCADE;
TRUNCATE public.ref_situation CASCADE;
TRUNCATE public.ref_action CASCADE;

SET check_function_bodies = false;
INSERT INTO public.admin (id, email, firstname, lastname) VALUES ('a81bc81a-dead-4e5d-abff-90865d1e13b7', 'support.carnet-de-bord@fabrique.social.gouv.fr', 'Carnet de Bord', 'Administrateur');
INSERT INTO public.beneficiary (id, email, lastname, firstname, caf_number, pe_number, postal_code, city, address1, address2, mobile_number, date_of_birth) VALUES ('c6e84ed6-eb31-47f0-bd71-9e4d7843cf0b', 'stifour93@yahoo.fr', 'Sophie', 'Tifour', '2055990', '300000L', '93190', 'Livry-Gargan', '7 chemin du soleil', NULL, '0606060606', '1982-02-01');
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('a81bc81b-dead-4e5d-abff-90865d1e13b2', NULL, 'Pole Emploi Agence Livry-Gargnan', 'Pole Emploi Agence Livry-Gargnan', '09 72 72 39 49', 'contact@pole-emploi.fr', '93190', 'Die', '33 Bd Robert Schuman', NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('1c52e5ad-e0b9-48b9-a490-105a4effaaea', NULL, 'Centre Communal d''action social Livry-Gargan', '', '01 41 70 88 00', '', NULL, 'Saint Denis', ' 3 Pl. François Mitterrand ', NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('e578237f-6167-4012-b457-7c4f36fb079d', NULL, 'Service Social Départemental', NULL, '01 71 29 43 80', NULL, '93800', 'Épinay-sur-Seine', ' 38 Av. Salvador Allende ', NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('8b71184c-6479-4440-aa89-15da704cc792', NULL, 'Groupe NS', NULL, '01 87 97 36 45 ', NULL, '91300', 'Montreuil', '28 rue de Lorraine ', NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('58d09cad-ed8c-4278-b449-e6673ae0fad4', NULL, 'Amélie', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('e8d09cad-ed8c-4278-b449-e6673ae0fad4', NULL, 'Sécurité sociale', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('3b299bcb-445c-48db-bc61-e30cd52d65b6', NULL, 'AFPA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('dfaaa6e1-4c5a-4079-a191-e8611d573acf', NULL, 'Plateforme - Ma demande de logement social', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.structure (id, siret, name, short_desc, phone, email, postal_code, city, address1, address2, creation_date, modification_date, website) VALUES ('dfaaa6e3-4c5a-4079-a191-e8611d573acf', NULL, 'Interlogement 93', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.professional (id, structure_id, email, lastname, firstname, "position", mobile_number) VALUES ('1a5b817b-6b81-4a4d-9953-26707a54e0e9', '1c52e5ad-e0b9-48b9-a490-105a4effaaea', 'pierre.chevalier@livry-gargan.fr', 'Pierre', 'Chevalier', 'Conseiller en insertion', '01 41 70 88 00');
INSERT INTO public.professional (id, structure_id, email, lastname, firstname, "position", mobile_number) VALUES ('e1fdb7a8-7d0e-4b2e-b28c-89a662d090a3', 'e578237f-6167-4012-b457-7c4f36fb079d', 'pcamara@seinesaintdenis.fr', 'Paul', 'Camara', 'Assistant de service social', '01 71 29 43 80');
INSERT INTO public.professional (id, structure_id, email, lastname, firstname, "position", mobile_number) VALUES ('74323049-eae6-4ccd-b596-e95514a32781', '8b71184c-6479-4440-aa89-15da704cc792', 'sanka@groupe-ns.fr', 'Anka', 'Simon', 'Conseiller en Insertion Professionnel', NULL);
INSERT INTO public.professional (id, structure_id, email, lastname, firstname, "position", mobile_number) VALUES ('a81bc81b-dead-4e5d-abff-90865d1e13b3', 'a81bc81b-dead-4e5d-abff-90865d1e13b2', 'dunord@pole-emploi.fr', 'Dunord', 'Thierry', 'Conseiller pôle emploi', '');
INSERT INTO public.account (id, username, type, access_key, access_key_date, last_login, beneficiary_id, professional_id, admin_id, confirmed, onboarding_done) VALUES ('9eee9fea-bf3e-4eb8-8f43-d9b7fd6fae76', 'admin', 'admin', NULL, NULL, '2021-09-21 12:25:55.822+00', NULL, NULL, 'a81bc81a-dead-4e5d-abff-90865d1e13b7', true, false);
INSERT INTO public.account (id, username, type, access_key, access_key_date, last_login, beneficiary_id, professional_id, admin_id, confirmed, onboarding_done) VALUES ('a501db53-1b79-4a60-860b-5972bd184f98', 'sanka', 'professional', NULL, NULL, NULL, NULL, '74323049-eae6-4ccd-b596-e95514a32781', NULL, true, true);
INSERT INTO public.account (id, username, type, access_key, access_key_date, last_login, beneficiary_id, professional_id, admin_id, confirmed, onboarding_done) VALUES ('17434464-5f69-40cc-8173-40160958a33d', 'thierry.dunord', 'professional', NULL, NULL, '2021-08-23 07:59:48.689+00', NULL, 'a81bc81b-dead-4e5d-abff-90865d1e13b3', NULL, true, true);
INSERT INTO public.account (id, username, type, access_key, access_key_date, last_login, beneficiary_id, professional_id, admin_id, confirmed, onboarding_done) VALUES ('d0b8f314-5e83-4535-9360-60f29dcfb5c8', 'pcamara', 'professional', NULL, NULL, NULL, NULL, 'e1fdb7a8-7d0e-4b2e-b28c-89a662d090a3', NULL, true, true);
INSERT INTO public.account (id, username, type, access_key, access_key_date, last_login, beneficiary_id, professional_id, admin_id, confirmed, onboarding_done) VALUES ('17434464-5f69-40cc-8172-40160958a33d', 'pierre.chevalier', 'professional', NULL, NULL, '2021-09-27 14:08:02.222+00', NULL, '1a5b817b-6b81-4a4d-9953-26707a54e0e9', NULL, true, true);
INSERT INTO public.notebook (id, beneficiary_id, creation_date, right_rsa, right_rqth, right_are, right_ass, right_bonus, geographical_area, education_level, job, work_situation_date, contract_type, contract_sign_date, work_situation) VALUES ('9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', 'c6e84ed6-eb31-47f0-bd71-9e4d7843cf0b', '2021-09-21 11:51:37.295647+00', 'rsa_droit_ouvert_et_suspendu', false, false, false, false, 'between_10_20', 'level_3', 'Aide à domicile (K1304)', '2021-09-22', 'cer', '2020-01-05', 'iae');
INSERT INTO public.notebook_focus (id, theme, situations, creator_id, notebook_id, creation_date, linked_to) VALUES ('a55d1dd2-2b09-4456-bcc5-1412695f684f', 'logement', '["Chez un tiers"]', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 13:15:54.752334+00', 'cer');
INSERT INTO public.notebook_focus (id, theme, situations, creator_id, notebook_id, creation_date, linked_to) VALUES ('19911b5c-e614-450d-bbeb-eba0d8ae1e18', 'difficulte_administrative', '["Accès au droit"]', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 13:26:42.939011+00', 'cer');
INSERT INTO public.notebook_focus (id, theme, situations, creator_id, notebook_id, creation_date, linked_to) VALUES ('d4bf4811-bbce-4f99-8b57-358187653b59', 'emploi', '["En construction de projet"]', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 13:33:16.96523+00', 'cer');
INSERT INTO public.notebook_target (id, focus_id, target, creation_date) VALUES ('7bfa2130-fe72-418e-8486-000c171cb853', 'a55d1dd2-2b09-4456-bcc5-1412695f684f', 'Recherche d''un logement', '2021-09-21 13:17:53.594417+00');
INSERT INTO public.notebook_target (id, focus_id, target, creation_date) VALUES ('0dac08fa-c103-438d-bf98-6b725a892e2d', 'd4bf4811-bbce-4f99-8b57-358187653b59', 'Définition d''un parcours de formation personnalisé', '2021-09-21 13:34:17.493745+00');
INSERT INTO public.notebook_target (id, focus_id, target, creation_date) VALUES ('8445b9bc-e523-4ff3-91dd-fd11bb413ae5', 'd4bf4811-bbce-4f99-8b57-358187653b59', 'Acceder à l''emploi', '2021-09-21 13:35:11.636378+00');
INSERT INTO public.notebook_target (id, focus_id, target, creation_date) VALUES ('2ce91415-b3bb-404f-adec-bbc6ea5af464', '19911b5c-e614-450d-bbeb-eba0d8ae1e18', 'Être accompagné dans les démarches d''accès au soin ', '2021-09-21 14:55:12.797276+00');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('3d0dc2b5-3dc8-4f5d-9e82-661299b3d522', 'Avoir un pass IAE validé', '8445b9bc-e523-4ff3-91dd-fd11bb413ae5', 'new', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2021-06-08 13:42:53.239372+00', '8b71184c-6479-4440-aa89-15da704cc792');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('3d0dc2b5-3dc8-4f5d-9e82-661299b3d533', 'Formation certifiante', '8445b9bc-e523-4ff3-91dd-fd11bb413ae5', 'new', '74323049-eae6-4ccd-b596-e95514a32781', '2021-07-01 15:34:53.239372+00', '8b71184c-6479-4440-aa89-15da704cc792');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('54c982ce-36f8-4124-a6eb-689f8f25a2e7', 'Demande SIAO', '7bfa2130-fe72-418e-8486-000c171cb853', 'new', 'e1fdb7a8-7d0e-4b2e-b28c-89a662d090a3', '2020-01-05 13:55:43.100609+00', 'e578237f-6167-4012-b457-7c4f36fb079d');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('64c982ce-36f8-4124-a6eb-689f8f25a2f7', 'Demande SIAO', '7bfa2130-fe72-418e-8486-000c171cb853', 'new', 'e1fdb7a8-7d0e-4b2e-b28c-89a662d090a3', '2020-03-01 13:55:43.100609+00', 'dfaaa6e3-4c5a-4079-a191-e8611d573acf');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('59c7f3b7-ca19-4408-bcb8-9b4fa8a07282', 'Demande de logement social', '7bfa2130-fe72-418e-8486-000c171cb853', 'new', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2020-07-01 15:13:59.820331+00', 'dfaaa6e1-4c5a-4079-a191-e8611d573acf');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('9f7289e2-8abd-4ef8-bc3c-6b90be77ca63', 'Demande de CSS', '2ce91415-b3bb-404f-adec-bbc6ea5af464', 'new', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2020-01-05 15:08:20.139704+00', 'e8d09cad-ed8c-4278-b449-e6673ae0fad4');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('9dec37fe-a454-4184-a8ee-ddd905d3f794', 'Prépa-Compétences', '0dac08fa-c103-438d-bf98-6b725a892e2d', 'new', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2020-09-01 15:11:37.55336+00', '3b299bcb-445c-48db-bc61-e30cd52d65b6');
INSERT INTO public.notebook_action (id, action, target_id, status, creator_id, creation_date, structure_id) VALUES ('67063818-486f-4f95-9beb-53a5a916e74b', 'Orientation vers une SIAE', '8445b9bc-e523-4ff3-91dd-fd11bb413ae5', 'new', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2020-11-01 13:40:07.137635+00', '8b71184c-6479-4440-aa89-15da704cc792');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('5a20092b-06bb-4c2a-98cf-038c764184f8', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-01-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Signature du PPAE', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('cccc09e0-fe0d-40a3-a1cf-9c38c0f284e3', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-01-15', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Ouverture des droits ARE', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('28d757da-4530-450f-af32-03963ed65c78', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-04-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Atelier - CV et Lettre de motivation', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('d7ce47a0-8b2d-4c92-9c7b-367e4886d58c', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-09-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Atelier - Découvrir son métier - SAP', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('7f5fb8d7-6b0d-4799-a6d5-fc9139260111', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-09-20', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Fin de droit ARE', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('cde8ce81-9c9c-4618-bb35-f4b987bb5a0a', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2018-10-20', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Fin de droit ASS', 'Pôle emploi');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('4a51ff46-ac75-483e-87b3-d540b718c018', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2019-11-15', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Ouverture des droits RSA', 'Caf');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('e49c447a-1214-438c-bd19-46cf55cb1bba', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-01-05', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Signature du CER 1', 'CCAS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('c1234b55-0b4c-4492-9ee2-da7f17bf6fda', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-01-05', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Demande CSS', 'CCAS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('ba929ff6-30f3-450c-af89-1b8e7a437c1b', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-04-05', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Enquète métier - Logistique', 'CCAS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('07132dae-006d-44f7-977b-c8b99fc4e5fb', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-04-05', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Demande de logement social', 'CCAS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('f6e965b0-2c4c-4b35-9c9a-29c4005700bd', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-07-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Signature du CER 2', 'CCAS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('77fb7aa9-292d-429e-a696-a8f61fd899e6', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-07-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Demande SIAO', 'Service Social Départemental');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('450a1a7d-c269-4749-a0c0-4189c0785ddb', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-07-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Prépa-Compétence', 'Afpa');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('678c1dd6-8dc3-42bf-aaca-a87e8a40c5b9', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2020-11-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Candidature SIAE', 'ITOU');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('6953e298-aa54-4e7d-8a01-b106530599a2', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2021-05-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Pass IAE', 'Groupe NS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('c7f99bc3-a4a5-40b8-a666-a5044892f634', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2021-07-01', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Entrée en formation', 'Groupe NS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('5782634c-eb5c-43ca-906c-a848a325864c', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2021-09-15', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Bilan 3 mois IAE', 'Groupe NS');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('13a8cf8b-9d9c-4821-9d9c-d2a24ed357e0', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2021-09-20', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Accord SIAO - CHRS ', 'Adoma');
INSERT INTO public.notebook_event (id, notebook_id, creation_date, event_date, professional_id, event, structure) VALUES ('de66b98d-cf1c-4427-8a98-80244a4edee3', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '2021-09-21 19:02:17.79037+00', '2021-11-15', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', 'Entrée en CHRS', 'Adoma');
INSERT INTO public.notebook_member (id, notebook_id, professional_id, notebook_visit_date, member_type, notebook_modification_date, creation_date, creator_id, invitation_send_date) VALUES ('91dba199-109c-4312-93cb-bd99f579532b', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '74323049-eae6-4ccd-b596-e95514a32781', NULL, '', NULL, '2021-09-21 12:32:59.911757+00', NULL, NULL);
INSERT INTO public.notebook_member (id, notebook_id, professional_id, notebook_visit_date, member_type, notebook_modification_date, creation_date, creator_id, invitation_send_date) VALUES ('ea55bf8a-c0da-4c5f-b38c-66d57e3e18ba', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', 'a81bc81b-dead-4e5d-abff-90865d1e13b3', NULL, '', NULL, '2021-09-21 12:33:10.281341+00', NULL, NULL);
INSERT INTO public.notebook_member (id, notebook_id, professional_id, notebook_visit_date, member_type, notebook_modification_date, creation_date, creator_id, invitation_send_date) VALUES ('14c147d0-f94b-4708-be90-0227efc70db7', '9b07a45e-2c7c-4f92-ae6b-bc2f5a3c9a7d', '1a5b817b-6b81-4a4d-9953-26707a54e0e9', '2021-09-21 13:06:45.076+00', 'referent', NULL, '2021-09-21 11:51:37.295647+00', NULL, NULL);
INSERT INTO public.ref_target (id, description, theme) VALUES ('ef8d2df3-9b04-435e-a26a-c532e17ae233', 'Recherche d''un logement', 'logement');
INSERT INTO public.ref_target (id, description, theme) VALUES ('fac56ab0-55b1-4829-af14-d3fcc0e44939', 'Se maintenir dans le logement suite à des impayés de loyers', 'logement');
INSERT INTO public.ref_target (id, description, theme) VALUES ('5560c147-af34-49d0-a8cb-a7027a341897', 'Résoudre les difficultés financières', 'difficulte_financiere');
INSERT INTO public.ref_target (id, description, theme) VALUES ('62c4ca9b-f71e-4bd5-9150-b4be820adf0d', 'Obtenir une domiciliation', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('c452a1d4-04a8-45f0-b9a1-03a61429e760', 'Accés à une allocation de retour à l''emploi', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('4203c74b-474f-4726-9fe3-cbbf0bb7ce0c', 'Démarches retraites', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('a4253baf-5dbd-4ee6-a642-b4f9942d396e', 'Démarches pour percevoir une pension alimentaire', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('b0d72a4f-b750-4df8-a6ea-1ea9c37bebaa', 'Aide juridictionnelle', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('ea6f9928-b3fc-4b06-819d-e55491539d7e', 'Accés à la mobilité', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('87cea1d8-44f3-4eb1-be05-4c64c4182605', 'Aide à l''obtention des justificatifs', 'difficulte_administrative');
INSERT INTO public.ref_target (id, description, theme) VALUES ('8ee41ac0-98ca-49df-b46e-abdc14e5f72e', 'Avoir accès aux transport en commun', 'mobilite');
INSERT INTO public.ref_target (id, description, theme) VALUES ('6bbb115f-cf97-4edb-b933-51ca85502ea6', 'Passer le permis B', 'mobilite');
INSERT INTO public.ref_target (id, description, theme) VALUES ('31f693f2-f09e-49f8-891e-8caba59a065e', 'Réparer sa voiture', 'mobilite');
INSERT INTO public.ref_target (id, description, theme) VALUES ('3802e199-e182-4b9c-84be-439ad7d52881', 'Accéder à une voiture', 'mobilite');
INSERT INTO public.ref_target (id, description, theme) VALUES ('c29def79-c93f-4e0b-a980-5643e34d69b5', 'Définition d''un parcours de formation personnalisé', 'emploi');
INSERT INTO public.ref_target (id, description, theme) VALUES ('28fb6022-a90d-45a9-9bcf-7763ec6f8213', 'Acceder à un CDDI', 'emploi');
INSERT INTO public.ref_target (id, description, theme) VALUES ('cffacf18-aef5-41aa-aca3-a55d9a800e42', 'Être accompagné dans les démarches d''accès au soin ', 'difficulte_administrative');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('ada5be15-c4e5-4e71-889b-de4f1e22b838', 'Demande SIAO', 'ef8d2df3-9b04-435e-a26a-c532e17ae233');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('d49bb66f-370d-4635-8001-cff8b5eaf78d', 'Demande de logement social', 'ef8d2df3-9b04-435e-a26a-c532e17ae233');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('6b4f47f8-04aa-493d-accd-9ebdf2dbaa10', 'Demande DALO - Démarche de relogement suite à une problématique d''insalubrité', 'ef8d2df3-9b04-435e-a26a-c532e17ae233');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('97485869-a061-4462-80da-d41fd4fcc655', 'Demande Fonds Solidarité Energie', 'fac56ab0-55b1-4829-af14-d3fcc0e44939');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('7542b8eb-d5b9-4fc0-802e-f7e46ed53e5e', 'Demande Fonds Solidarité Logement', 'fac56ab0-55b1-4829-af14-d3fcc0e44939');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('f4b468b8-b3c1-4460-9063-31b5868aeea4', 'Aide à la constitution du dossier de surendettement', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('bd46e79b-04da-4d7a-8f9c-6bee881846fb', 'Médiation avec les institutions', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('5309db9c-0aaa-414f-8109-21c5ae24fca6', 'Aide à la négociation ou renégociation de prêt', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('7168af78-90cf-4d85-a707-99f29c1227e0', 'Aide et accompagnement à la résolution des dettes diverses', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('66c343fa-18aa-4065-aa42-5cfe20737582', 'Aide éducative budgétaire', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('008e93da-2184-4579-907f-2301bff6b36f', 'Aide difficultés financières', '5560c147-af34-49d0-a8cb-a7027a341897');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('875e91a6-d1b8-46af-aca8-25bb1521fda4', 'Cerfa - Demande de domiciliation', '62c4ca9b-f71e-4bd5-9150-b4be820adf0d');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('82b782b2-3497-4e0d-9901-a1a3e46c2683', 'Déclaration trimestrielle des revenues', 'c452a1d4-04a8-45f0-b9a1-03a61429e760');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('fc4b1e82-73f8-49db-b97e-e81bae7dde1e', 'Déclaration de situation', 'c452a1d4-04a8-45f0-b9a1-03a61429e760');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('1ef3dacd-6d4e-4f44-827e-02d5934b688a', 'Demander l''Aide à la mobilité', '8ee41ac0-98ca-49df-b46e-abdc14e5f72e');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('dc3e774a-54f8-4167-97de-0121ee1d44ee', 'Demander des Chèques mobilité', '8ee41ac0-98ca-49df-b46e-abdc14e5f72e');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('b6d9ca30-698c-44c2-98c0-b5d51ae9aeda', 'Inscrire en auto-école', '6bbb115f-cf97-4edb-b933-51ca85502ea6');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('dddf2eca-dd6f-41f3-87b9-c63b0b9a9080', 'Demander l''Aide à la mobilité', '31f693f2-f09e-49f8-891e-8caba59a065e');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('3280109d-37dc-40c8-af2d-51505264adea', 'Mise à disposition de voiture', '3802e199-e182-4b9c-84be-439ad7d52881');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('d7fba25c-d7b1-4c6a-b0ae-600bbca1d3ad', 'Co-voiturage', '3802e199-e182-4b9c-84be-439ad7d52881');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('4fe62d1b-3c11-4aaa-956f-d5cf578a46f3', 'Orientation vers une SIAE', '28fb6022-a90d-45a9-9bcf-7763ec6f8213');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('a33ff64b-14dc-4126-9ae1-6f80784e8281', 'Avoir un pass IAE validé', '28fb6022-a90d-45a9-9bcf-7763ec6f8213');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('122a868c-4a63-4707-a176-ef4818d741fc', 'Demande de CSS', 'cffacf18-aef5-41aa-aca3-a55d9a800e42');
INSERT INTO public.ref_action (id, description, target_id) VALUES ('cd673496-aa4c-4047-a752-9451e380d3e5', 'Prépa-Compétences', 'c29def79-c93f-4e0b-a980-5643e34d69b5');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('dc5b03e6-14f4-4ded-9313-dcbbd6c7d88c', 'Sans hébergement', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('1b770b5e-aa1a-4393-9a2e-d30dc4db4b80', 'CHRS', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('4cd5ef49-8d0d-4a46-b6f1-21971ca5550f', 'Hôtel social', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('eaadaacc-c255-4dfb-85aa-f242640e6489', 'Foyer d''urgence', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('60bde280-f89f-470a-9f32-a9b1efb4f8ce', 'Appartement relais', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('650450a8-3a65-4c70-84b2-ee173a29a57c', 'Bail glissant', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('5505bbc9-924c-4169-b670-cf063d0f5a7b', 'Logement insalubre', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('aae6e671-5f5f-4de4-92b4-1333e410c3b4', 'Expulsion en cours', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('dffc61ff-46bf-424c-b86a-0b26bac5c7ec', 'Difficulté à payer le loyer', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('985b2296-ffa2-4f1a-8c87-3f0984a7456c', 'Chez un tiers', 'logement');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('a6d95918-d6ef-4073-b466-8b7c39088e61', 'Difficultés financières', 'difficulte_financiere');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('cb9db2ff-4058-4fbe-b05d-e995719a1262', 'Pas de carte d''identifié', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('1ad7d1cb-6021-4acd-8a8b-1cfb185604f3', 'Pas d''avis d''impot', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('507c4642-a921-4372-a761-8eebffe19bf8', 'Pas de titre de séjour à jour', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('5dc1c7ba-0e40-4442-ac7f-6d243c6d6c9c', 'Pas de sécurité sociale à jour', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('58a677d0-26c6-4d36-8b3a-365eb0b55bab', 'Pas de CSS', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('60883f02-8e1b-4942-8094-4433faac3172', 'Difficultés juridiques', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('7ca798b9-6d29-435d-8113-541e5a42baa9', 'Accès au droit', 'difficulte_administrative');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('d91cd26a-0f24-46fa-bac8-9a1da170162f', 'Pas d''accès aux transports en commun', 'mobilite');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('044686d9-e0f0-48ed-afda-16e25d474ec0', 'Pas de permis valide', 'mobilite');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('cd80428e-3eb7-4025-acbc-c4c619c88841', 'Permis B mais sans véhicule', 'mobilite');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('38e14456-637e-4193-8ab2-68c3b27fd749', 'Mobile à vélo', 'mobilite');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('6e4acc44-3f5e-4b78-9af4-408bc2b7db64', 'Aucun moyen de transport à disposition', 'mobilite');
INSERT INTO public.ref_situation (id, description, theme) VALUES ('50c826cd-76bc-488e-b9ab-5420ebc7af27', 'En construction de projet', 'emploi');
