--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-02-22 17:22:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 49165)
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    id integer NOT NULL,
    created_at text,
    name text
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 49168)
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.companies ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 204 (class 1259 OID 49176)
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    created_at text,
    username text,
    company_name text
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 49179)
-- Name: exployees_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.employees ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.exployees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2821 (class 0 OID 49165)
-- Dependencies: 202
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.companies OVERRIDING SYSTEM VALUE VALUES (1, '22/02/20 16:22', 'ООО "Рога И Копыта"');
INSERT INTO public.companies OVERRIDING SYSTEM VALUE VALUES (2, '22/02/20 16:23', 'ООО "Копа И Рогыта"');
INSERT INTO public.companies OVERRIDING SYSTEM VALUE VALUES (3, '22/02/20 16:23', 'Большая Деньга');
INSERT INTO public.companies OVERRIDING SYSTEM VALUE VALUES (4, '22/02/20 16:23', 'Маленькая Деньга');
INSERT INTO public.companies OVERRIDING SYSTEM VALUE VALUES (5, '22/02/20 16:23', 'НеФинансоваяПирамида');


--
-- TOC entry 2823 (class 0 OID 49176)
-- Dependencies: 204
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (1, '22/02/20 16:24', 'Иван Мягкий', 'ООО "Копа И Рогыта"');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (2, '22/02/20 16:25', 'Дафния Планктоновна', 'Большая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (3, '22/02/20 16:25', 'Кайло Рен', 'Большая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (4, '22/02/20 16:26', 'Джонни Депп', 'Большая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (5, '22/02/20 16:26', 'Геллерт Гриндевальд', 'Маленькая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (6, '22/02/20 16:26', 'Тирион Ланнистер', 'Маленькая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (7, '22/02/20 16:27', 'Джон Сноу', 'НеФинансоваяПирамида');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (8, '22/02/20 16:27', 'Витебск Русский', 'Маленькая Деньга');
INSERT INTO public.employees OVERRIDING SYSTEM VALUE VALUES (10, '22/02/20 16:28', 'Битрикс Одинэсович', 'НеФинансоваяПирамида');


--
-- TOC entry 2830 (class 0 OID 0)
-- Dependencies: 203
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_id_seq', 6, true);


--
-- TOC entry 2831 (class 0 OID 0)
-- Dependencies: 205
-- Name: exployees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exployees_id_seq', 10, true);


-- Completed on 2020-02-22 17:22:38

--
-- PostgreSQL database dump complete
--

