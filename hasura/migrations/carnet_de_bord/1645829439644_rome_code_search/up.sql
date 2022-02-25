CREATE OR REPLACE FUNCTION public.search_rome_codes(search text)
 RETURNS SETOF rome_codes
 LANGUAGE sql
 STABLE
AS $function$
  SELECT *
  FROM rome_codes
  WHERE
    unaccent(search) <% label
  ORDER BY unaccent(search) <<-> label ASC
$function$;
