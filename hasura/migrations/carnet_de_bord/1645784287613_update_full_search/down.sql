CREATE OR REPLACE FUNCTION public.search_notebook_members(search text)
RETURNS SETOF notebook_member
LANGUAGE sql
STABLE
AS $function$
 SELECT notebook_member.*
 FROM notebook_member
 JOIN notebook ON notebook.id = notebook_member.notebook_id
 JOIN beneficiary ON beneficiary.id = notebook.beneficiary_id
 WHERE
		 unaccent(search) <% beneficiary.lastname
		 OR search <% beneficiary.pe_number
		 OR search <% beneficiary.caf_number
		 OR search <% beneficiary.mobile_number
$function$;
