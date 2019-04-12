json.extract! pattern, :id, :pattern_name, :pattern_link, :pattern_notes, :created_at, :updated_at
json.url pattern_url(pattern, format: :json)

json.steps pattern.steps