(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{309:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"sql通用语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql通用语法"}},[t._v("#")]),t._v(" SQL通用语法")]),t._v(" "),s("ol",[s("li",[t._v("SQL语句可以单行或者多行书写，以分号结尾。")]),t._v(" "),s("li",[t._v("SQL语句可以使用空格/缩进来增强语句的可读性。")]),t._v(" "),s("li",[t._v("MySQL数据库的SQL语句不区分大小写，关键字可以使用大写。")])]),t._v(" "),s("h2",{attrs:{id:"sql分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql分类"}},[t._v("#")]),t._v(" SQL分类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("分类")]),t._v(" "),s("th",[t._v("全称")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#ddl"}},[t._v("DDL")])]),t._v(" "),s("td",[t._v("Data Definition Language")]),t._v(" "),s("td",[t._v("数据定义语言，用来定义数据库对象（数据库，表，字段）")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#dml"}},[t._v("DML")])]),t._v(" "),s("td",[t._v("Data Manipulation Language")]),t._v(" "),s("td",[t._v("数据操作语言，用来对数据库表中的数据进行增删改")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#dql"}},[t._v("DQL")])]),t._v(" "),s("td",[t._v("Data Query Language")]),t._v(" "),s("td",[t._v("数据查询语句，用来查询数据库中表的记录")])]),t._v(" "),s("tr",[s("td",[t._v("DCL")]),t._v(" "),s("td",[t._v("Data Control Language")]),t._v(" "),s("td",[t._v("数据控制语言，用来创建数据库用户、控制数据库的访问权限")])])])]),t._v(" "),s("h2",{attrs:{id:"ddl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ddl"}},[t._v("#")]),t._v(" DDL")]),t._v(" "),s("h3",{attrs:{id:"数据库的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库的操作"}},[t._v("#")]),t._v(" 数据库的操作")]),t._v(" "),s("ol",[s("li",[t._v("查询")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("databases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查询所有数据库 */")]),t._v("\nselectt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查询当前数据库 */")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("no")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" database_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("charset")]),t._v(" utf8mb4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("删除")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" database_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("使用")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" database_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表操作"}},[t._v("#")]),t._v(" 表操作")]),t._v(" "),s("ol",[s("li",[t._v("查询")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当前数据库所有表 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查询表结构 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查询指定表的建表语句 */")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  filed_name file_type "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" file_comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filed_name2 file_type2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" file_comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" table_comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("修改")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 添加字段")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" filed_name 类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("长度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" 注释"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 修改数据类型")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" 字段名 新数据类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("长度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 修改字段名和字段类型")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name change 旧字段名 新字段名 类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("长度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" 注释"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 修改表明")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" old_table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" new_table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("删除")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 删除表中某个字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" field_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 删除表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 删除指定表，并重新创建该表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("truncate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"dml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dml"}},[t._v("#")]),t._v(" DML")]),t._v(" "),s("ul",[s("li",[t._v("添加数据(insert)")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 给指定字段添加数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 给全部字段添加数据 按照索引来添加")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 批量添加数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("修改数据(update)")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" table_name 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("删除数据(delete)")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 不加条件语句则删除所有数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"dql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dql"}},[t._v("#")]),t._v(" DQL")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\n  字段列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("\n  表名称列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n  条件列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("\n  分组字段列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v("\n  分组后条件列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v("\n  排序字段列表\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v("\n  分页参数\n")])])]),s("h3",{attrs:{id:"_1-查询多个字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询多个字段"}},[t._v("#")]),t._v(" 1. 查询多个字段")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 设置别名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 别名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 去除重复记录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" 字段列表 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-条件查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-条件查询"}},[t._v("#")]),t._v(" 2. 条件查询")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段列表 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件列表"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("条件")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("比较运算法")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(">")]),t._v(" "),s("td",[t._v("大于")])]),t._v(" "),s("tr",[s("td",[t._v(">=")]),t._v(" "),s("td",[t._v("大于等于")])]),t._v(" "),s("tr",[s("td",[t._v("<")]),t._v(" "),s("td",[t._v("小于")])]),t._v(" "),s("tr",[s("td",[t._v("<=")]),t._v(" "),s("td",[t._v("小于等于")])]),t._v(" "),s("tr",[s("td",[t._v("=")]),t._v(" "),s("td",[t._v("等于")])]),t._v(" "),s("tr",[s("td",[t._v("!=")]),t._v(" "),s("td",[t._v("不等于")])]),t._v(" "),s("tr",[s("td",[t._v("between ... and ...")]),t._v(" "),s("td",[t._v("在范围之内的")])]),t._v(" "),s("tr",[s("td",[t._v("in(值1,值2...)")]),t._v(" "),s("td",[t._v("在 in 之后的列表中的值， 多选一")])]),t._v(" "),s("tr",[s("td",[t._v("like")]),t._v(" "),s("td",[t._v("模糊匹配(_匹配单个字符，%匹配任意一个字符)(__, %test%)")])]),t._v(" "),s("tr",[s("td",[t._v("is null")]),t._v(" "),s("td",[t._v("是 null")])])])]),t._v(" "),s("ul",[s("li",[t._v("逻辑运算符")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("逻辑运算符")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("and 或 &&")]),t._v(" "),s("td",[t._v("与")])]),t._v(" "),s("tr",[s("td",[t._v("or 或 ||")]),t._v(" "),s("td",[t._v("且")])]),t._v(" "),s("tr",[s("td",[t._v("not 或 !")]),t._v(" "),s("td",[t._v("非")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-聚合函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-聚合函数"}},[t._v("#")]),t._v(" 3. 聚合函数")]),t._v(" "),s("ul",[s("li",[t._v("将一列数据作为一个整体，进行纵向计算")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("统计数据数量。total")])]),t._v(" "),s("tr",[s("td",[t._v("max")]),t._v(" "),s("td",[t._v("最大值")])]),t._v(" "),s("tr",[s("td",[t._v("min")]),t._v(" "),s("td",[t._v("最小值")])]),t._v(" "),s("tr",[s("td",[t._v("avg")]),t._v(" "),s("td",[t._v("平均值")])]),t._v(" "),s("tr",[s("td",[t._v("sum")]),t._v(" "),s("td",[t._v("求和")])])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-分组查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-分组查询"}},[t._v("#")]),t._v(" 4. 分组查询")]),t._v(" "),s("ul",[s("li",[t._v("group by: 根据字段分组 查数据")]),t._v(" "),s("li",[t._v("having: 分组之后根据条件再过滤一遍")]),t._v(" "),s("li",[t._v("一般分组查询的都是 分组的字段 + 聚合函数")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段列表 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" 条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" 分组字段名 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v(" 分组后过滤条件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 获取年龄小于45，并更具地址分组，获取数量大于3的地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-排序查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-排序查询"}},[t._v("#")]),t._v(" 5. 排序查询")]),t._v(" "),s("ul",[s("li",[t._v("asc: 升序(默认，可省略)")]),t._v(" "),s("li",[t._v("desc: 倒序")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" 字段列表 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 排序方式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 字段"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 排序方式"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-分页查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-分页查询"}},[t._v("#")]),t._v(" 6. 分页查询")]),t._v(" "),s("ul",[s("li",[t._v("从 起始索引 开始 查 多少条数据")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" 起始索引"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("查询记录数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);