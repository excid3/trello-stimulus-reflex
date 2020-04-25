json.extract! todo, :id, :list_id, :position, :description, :created_at, :updated_at
json.url todo_url(todo, format: :json)
