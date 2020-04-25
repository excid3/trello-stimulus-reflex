class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.references :list, null: false, foreign_key: true
      t.integer :position
      t.string :description

      t.timestamps
    end
  end
end
