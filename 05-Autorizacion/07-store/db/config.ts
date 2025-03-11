import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true, unique: true}),
    name: column.text(),
    email: column.text({unique: true}),
    password: column.text(),
    createAt: column.date({default: new Date()}),
    role: column.text({references: () => Role.columns.id}), //admin, user   
  },
});

const Role = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
  },
});


export default defineDb({
  tables: {
    User,
    Role,
  }
});
